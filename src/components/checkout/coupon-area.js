import React, { useState } from "react";
// internal
import CouponForm from "@components/forms/coupon-form";

const CouponArea = (props) => {
  const [checkoutCoupon, setCheckoutCoupon] = useState(false);
  return (
    <section className="coupon-area pt-120 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>
                Có mã giảm giá?{" "}
                <span
                  onClick={() => setCheckoutCoupon(!checkoutCoupon)}
                  id="showcoupon"
                >
                  Nhấp vào đây để thêm mã giảm giá
                </span>
              </h3>
              {checkoutCoupon && (
                <div id="checkout_coupon" className="coupon-checkout-content">
                  <div className="coupon-info">
                    {/* info form start */}
                    <CouponForm {...props} />
                    {/* info form end */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponArea;
