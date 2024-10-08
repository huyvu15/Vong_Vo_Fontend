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
          <span className="amount text-end">{total}đ</span>
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
                onClick={() => handleShippingCost(50000)}
                htmlFor="flat_shipping"
              >
                <span className="amount">Giao trong ngày: 50000đ</span>
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
                Giao trong 7 ngày : 10000đ
              </label>
              <ErrorMessage message={errors?.shippingOption?.message} />
            </li>
          </ul>
        </td>
      </tr>

      {/* <tr className="shipping">
        <th>Sub Total</th>
        <td className="text-end">
          <strong>
            <span className="amount">${total}</span>
          </strong>
        </td>
      </tr> */}

      <tr className="shipping">
        <th>Phí giao hàng</th>
        <td className="text-end">
          <strong>
            <span className="amount">{shippingCost}đ</span>
          </strong>
        </td>
      </tr>

      <tr className="shipping">
        <th>Giảm giá</th>
        <td className="text-end">
          <strong>
            <span className="amount">{discountAmount.toFixed(0)}đ</span>
          </strong>
        </td>
      </tr>

      <tr className="order-total">
        <th>Thành tiền</th>
        <td className="text-end">
          <strong>
            <span className="amount">{cartTotal.toFixed(0)}đ</span>
          </strong>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default OrderDetails;
