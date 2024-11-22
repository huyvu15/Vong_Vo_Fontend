import React from "react";

const OldNewPrice = ({originalPrice,discount}) => {
  return (
    <div className="product__price">
      <del className="product__ammount old-price">
        {originalPrice.toLocaleString("vi-VN")}đ
      </del>
      <span className="product__ammount new-price " style={{ color: '#F50963' }}>
        {" "}
        {(
          Number(originalPrice) -
          (Number(originalPrice) * Number(discount)) / 100
        ).toLocaleString("vi-VN")}đ
      </span>
    </div>
  );
};

export default OldNewPrice;
