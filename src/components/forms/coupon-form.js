import React, { useRef } from "react";
import { useSelector } from "react-redux";

const CouponForm = ({handleCouponCode,couponRef}) => {
  const { coupon_info } = useSelector((state) => state.coupon);
  return (
    <form onSubmit={handleCouponCode}>
      {coupon_info?.couponCode ? (
        <p>Đã áp dụng mã giảm giá {coupon_info?.discountPercentage} %</p>
      ) : (
        <p className="checkout-coupon">
          <input ref={couponRef} type="text" placeholder="Mã giảm giá" />
          <button className="tp-btn" type="submit">
            Áp dụng mã
          </button>
        </p>
      )}
    </form>
  );
};

export default CouponForm;
