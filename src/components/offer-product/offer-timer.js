import React from "react";
import { useTimer } from "react-timer-hook";

const OfferTimer = ({expiryTimestamp}) => {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });
  return (
    <div
      className="product__coupon-countdown"
      data-countdown=""
    >
      <div className="product__coupon-countdown-inner">
        <ul>
          <li>
            <span data-days="">{days}</span> Ngày
          </li>
          <li>
            <span data-hours="">{hours}</span> Giờ
          </li>
          <li>
            <span data-minutes="">{minutes}</span> Phút
          </li>
          <li>
            <span data-seconds="">{seconds}</span> Giây
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OfferTimer;
