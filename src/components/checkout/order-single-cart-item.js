import React from "react";

const OrderSingleCartItem = ({ title, quantity, price, discount }) => {
  return (
    <tr className="cart_item">
      <td className="product-name">
        {title} <strong className="product-quantity"> × {quantity}</strong>
      </td>
      <td className="product-total text-end">
        <span className="amount">{price*(100-discount)/100}đ</span>
      </td>
    </tr>
  );
};

export default OrderSingleCartItem;
