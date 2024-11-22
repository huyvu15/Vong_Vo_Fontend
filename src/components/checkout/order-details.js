import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// internal
import useCartInfo from "@hooks/use-cart-info";
import ErrorMessage from "@components/error-message/error";

const OrderDetails = ({
  register,
  errors,
  handleShippingCost,
  cartTotal,
  shippingCost,
  discountAmount,
}) => {
  const { total } = useCartInfo();

  return (
    <React.Fragment>
      <tr className="cart-subtotal">
        <th>Tiền giỏ hàng</th>
        <td className="text-end">
          <span className="amount text-end">{total.toLocaleString("vi-VN")}đ</span>
        </td>
      </tr>
      <tr className="shipping">
        <th>Phí giao hàng</th>
        <td className="text-end">
          <ul>
            <li>
              <input
                {...register(`shippingOption`, {
                  required: `Phí giao hàng là bắt buộc!`,
                })}
                id="flat_shipping"
                type="radio"
                name="shippingOption"
              />
              <label
                onClick={() => handleShippingCost(30000)}
                htmlFor="flat_shipping"
              >
                <span className="amount">Giao trong ngày: {30000 .toLocaleString("vi-VN")}đ</span>
              </label>
              <ErrorMessage message={errors?.shippingOption?.message} />
            </li>

            <li>
              <input
                {...register(`shippingOption`, {
                  required: `Phí giao hàng là bắt buộc!`,
                })}
                id="free_shipping"
                type="radio"
                name="shippingOption"
              />
              <label
                onClick={() => handleShippingCost(10000)}
                htmlFor="free_shipping"
              >
                Giao trong 7 ngày : {10000 .toLocaleString("vi-VN")}đ
              </label>
              <ErrorMessage message={errors?.shippingOption?.message} />
            </li>
          </ul>
        </td>
      </tr>

      <tr className="shipping">
        <th>Phí giao hàng</th>
        <td className="text-end">
          <strong>
            <span className="amount">{shippingCost.toLocaleString("vi-VN")}đ</span>
          </strong>
        </td>
      </tr>

      <tr className="shipping">
        <th>Giảm giá</th>
        <td className="text-end">
          <strong>
            <span className="amount">{discountAmount.toLocaleString("vi-VN")}đ</span>
          </strong>
        </td>
      </tr>

      <tr className="order-total">
        <th>Thành tiền</th>
        <td className="text-end">
          <strong>
            <span className="amount">{cartTotal.toLocaleString("vi-VN")}đ</span>
          </strong>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default OrderDetails;
