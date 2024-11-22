import React from "react";
// internal
import {Payment, Refund, ShippingCar, Support} from "@svg/index";

// SingleFeature
function SingleFeature({ icon, title, subtitle }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
      <div className="features__item-13 d-flex align-items-start mb-40">
        <div className="features__icon-13">
          <span>{icon}</span>
        </div>
        <div className="features__content-13">
          <h3 className="features__title-13">{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

const ShopFeature = () => {
  return (
    <>
      <section className="features__area pt-80 pb-20">
        <div className="container">
          <div className="row">
            <SingleFeature
              icon={<ShippingCar />}
              title="Miễn phí vẫn chuyển"
              subtitle={
                <>
                  Miễn phí vẫn chuyển cho đơn <br /> trên 1.000.000đ
                </>
              }
            />
            <SingleFeature
              icon={<Refund/>}
              title="Hoàn trả"
              subtitle={
                <>
                  Hoàn trả trong vòng  <br /> 30 ngày.
                </>
              }
            />
            <SingleFeature
              icon={<Support />}
              title="Hỗ trợ"
              subtitle={
                <>
                  24 giờ trên ngày, 7 ngày <br /> trên tuần
                </>
              }
            />
            <SingleFeature
              icon={<Payment />}
              title="Thanh toán"
              subtitle={
                <>
                  Thanh toán bằng nhiều thẻ <br />  tín dụng
                </>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopFeature;
