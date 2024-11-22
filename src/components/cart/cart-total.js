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
          Tổng <span>{total.toLocaleString("vi-VN")}đ</span>
        </li>
        <li>
          Thành tiền <span>{total.toLocaleString("vi-VN")}đ</span>
        </li>
      </ul>
      <Link href="/checkout" className="tp-btn cursor-pointer">
        Thanh toán ngay
      </Link>
    </div>
  );
};

export default CartTotal;
