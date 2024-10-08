import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
// internal
import CartTotal from "./cart-total";
import CouponUpdateCart from "./coupon-update";
import SingleCartItem from "./single-cart";
import EmptyCart from "@components/common/sidebar/cart-sidebar/empty-cart";

// cart items

const CartArea = () => {
  const { cart_products } = useSelector((state) => state.cart);
  return (
    <section className="cart-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {cart_products.length > 0 && (
              <form onSubmit={e => e.preventDefault()}>
                <div className="table-content table-responsive">
                  <div className="tp-continue-shopping">
                    <p>
                      <Link href="/shop">
                        Tiếp tục mua hàng <i className="fal fa-reply"></i>
                      </Link>
                    </p>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Ảnh</th>
                        <th className="cart-product-name">Tên sản phẩm</th>
                        <th className="product-price">Giá</th>
                        <th className="product-quantity">Số lượng</th>
                        <th className="product-subtotal">Tổng</th>
                        <th className="product-remove">Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart_products.map((item, i) => (
                        <SingleCartItem key={i} item={item} />
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="row justify-content-end">
                  <div className="col-md-5 mr-auto">
                    {/* cart total */}
                    <CartTotal />
                    {/* cart total */}
                  </div>
                </div>
              </form>
            )}
            {cart_products.length === 0 && <EmptyCart />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartArea;
