import Image from "next/image";
import React from "react";
import Link from "next/link";
// internal
import empty_img from "@assets/img/product/cartmini/empty-cart.png";

const EmptyCart = ({ search_prd = false }) => {
  return (
    <div className="cartmini__empty text-center">
      <Image src={empty_img} alt="Ảnh" />
      <p>{search_prd ? `Xin lỗi,😥 chúng tôi không tìm thấy sản phẩm nào` : `Không có sản phẩm nào`}</p>
      {!search_prd && (
        <Link href="/shop" className="tp-btn">
          Tiếp tục mua hàng
        </Link>
      )}
    </div>
  );
};

export default EmptyCart;
