import Link from "next/link";
import React from "react";
// internal
import useCartInfo from "@hooks/use-cart-info";

const CartTotal = () => {
  const { total } = useCartInfo();
  return (
    <div className="cart-page-total">
      <h2>Tổng hàng</h2>
      <ul className="mb-20">
        <li>
          Tổng <span>{total.toFixed(0)}đ</span>
        </li>
        <li>
          Thành tiền <span>{total.toFixed(0)}đ</span>
        </li>
      </ul>
      <Link href="/checkout" className="tp-btn cursor-pointer">
        Thanh toán ngay
      </Link>
    </div>
  );
};

export default CartTotal;
