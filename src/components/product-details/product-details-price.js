import React from "react";

const ProductDetailsPrice = ({ price, discount }) => {
  return (
    <div className="product__details-price">
      {discount > 0 ? (
        <>
          <span className="product__details-ammount old-ammount">{price.toLocaleString("vi-VN")}đ</span>
          <span className="product__details-ammount new-ammount">
          {(Number(price) - (Number(price) * Number(discount)) / 100).toLocaleString("vi-VN")}đ
          </span>
          <span className="product__details-offer">-{discount}%</span>
        </>
      ) : (
        <>
          <span className="product__details-ammount new-ammount">{price.toLocaleString("vi-VN")}đ</span>
        </>
      )}
    </div>
  );
};

export default ProductDetailsPrice;
// import React from "react";

// const ProductDetailsPrice = ({ price, discount }) => {
//   return (
//     <div className="product__price">
//       {discount > 0 ? (
//         <>
//           <span className="old-price">{price.toLocaleString("vi-VN")}đ</span>
//           <span className="product__details-ammount new-ammount">
//             {discountedPrice.toLocaleString("vi-VN")}đ
//           </span>
//         </>
//       ) : (
//         <span className="price">{price.toLocaleString("vi-VN")}đ</span>
//       )}
//     </div>
//   );
// };

// export default ProductDetailsPrice;
