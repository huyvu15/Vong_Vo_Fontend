function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
  }
  return sorted;
}

export default function handler(req, res) {
  const api = process.env.NEXT_PUBLIC_API_BASE_URL;
  let vnp_Params = req.query;
  let secureHash = vnp_Params['vnp_SecureHash'];

  delete vnp_Params['vnp_SecureHash'];
  delete vnp_Params['vnp_SecureHashType'];

  vnp_Params = sortObject(vnp_Params);

  let secretKey = process.env.NEXT_PUBLIC_VNP_HASH_SECRET;

  let querystring = require('qs');
  let signData = querystring.stringify(vnp_Params, { encode: false });
  let crypto = require("crypto");
  let hmac = crypto.createHmac("sha512", secretKey);
  let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");

  if (secureHash === signed) {
    if (vnp_Params['vnp_ResponseCode'] === '00') {
      fetch(`${api}/api/order/update-status/${vnp_Params['vnp_OrderInfo']}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "success" }),
      })
        .then((response) => response.json())
        .then((data) => {
          res.redirect(`/order/${vnp_Params['vnp_OrderInfo']}`)
        })
        .catch((error) => {
          res.redirect(`/checkout?error=${error}`)
        });
    } else {
      fetch(`${api}/api/order/update-status/${vnp_Params['vnp_OrderInfo']}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "failed" }),
      })
        .then((response) => response.json())
        .then((data) => {
          res.redirect(`/checkout?error=fail`)
        })
        .catch((error) => {
          res.redirect(`/checkout?error=${error}`)
        });
    }
  } else {
    fetch(`${api}/api/order/update-status/${vnp_Params['vnp_OrderInfo']}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "failed" }),
    })
      .then((response) => response.json())
      .then((data) => {
        res.redirect(`/checkout?error=fail`)
      })
      .catch((error) => {
        res.redirect(`/checkout?error=${error}`)
      });
  }
}
