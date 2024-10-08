import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// internal
import { CartTwo, Compare, Eye, HeartTwo } from "@svg/index";
import { RatingFull, RatingHalf } from "./rating";
import ProductModal from "@components/common/modals/product-modal";
import OldNewPrice from "./old-new-price";
import {
  add_cart_product,
  initialOrderQuantity,
} from "src/redux/features/cartSlice";
import { add_to_wishlist } from "src/redux/features/wishlist-slice";
import { setProduct } from "src/redux/features/productSlice";

const SingleProduct = ({ product, discountPrd = false }) => {
  const { _id, image, title, price, discount, originalPrice } = product || {};
  const dispatch = useDispatch();
  const { cart_products } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const isWishlistAdded = wishlist.some(item => item._id === _id);
  const isAddedToCart = cart_products.some((prd) => prd._id === _id);

  // handle add product
  const handleAddProduct = (prd) => {
    dispatch(add_cart_product(prd));
  };
  // handle add wishlist
  const handleAddWishlist = (prd) => {
    dispatch(add_to_wishlist(prd));
  };

  // handle quick view
  const handleQuickView = (prd) => {
    dispatch(initialOrderQuantity())
    dispatch(setProduct(prd))
  };

  return (
    <React.Fragment>
      <div className="product__item p-relative transition-3 mb-50">
        <div className="product__thumb w-img p-relative fix">
          <Link href={`/product-details/${_id}`}>
            <Image
              src={image}
              alt="Ảnh sản phẩm"
              width={960}
              height={1125}
              style={{ width: "100%", height: "100%" }}
            />
          </Link>

          {discount > 0 && (
            <div className="product__badge d-flex flex-column flex-wrap">
              <span
                className={`product__badge-item ${
                  discountPrd ? "has-offer" : "has-new"
                }`}
              >
                {discountPrd ? `-${discount}%` : "Giảm"}
              </span>
              {!discountPrd && (
                <span className={`product__badge-item has-offer`}>
                  {`-${discount}%`}
                </span>
              )}
            </div>
          )}

          <div className="product__action d-flex flex-column flex-wrap">
            <button
              type="button"
              className={`product-action-btn ${isWishlistAdded?"active":""}`}
              onClick={() => handleAddWishlist(product)}
            >
              <HeartTwo />
              <span className="product-action-tooltip">Thêm vào yêu thích</span>
            </button>
            <button
              onClick={() => handleQuickView(product)}
              type="button"
              className="product-action-btn"
            >
              <Eye />
              <span className="product-action-tooltip">Xem nhanh</span>
            </button>
            <Link href={`/product-details/${_id}`}>
            <button type="button" className="product-action-btn">
               <i className="fa-solid fa-link"></i>
              <span className="product-action-tooltip">Chi tiết sản phẩm</span>
            </button>
            </Link>
          </div>
          <div className="product__add transition-3">
            {isAddedToCart ? (
              <Link
                href="/cart"
                type="button"
                className="product-add-cart-btn w-100"
              >
                <CartTwo />
                Xem giỏ hàng
              </Link>
            ) : (
              <button
                onClick={() => handleAddProduct(product)}
                type="button"
                className="product-add-cart-btn w-100"
              >
                <CartTwo />
                Thêm giỏ hàng
              </button>
            )}
          </div>
        </div>
        <div className="product__content">
          <h3 className="product__title">
            <Link href={`/product-details/${_id}`}>{title}</Link>
          </h3>
          {discount <= 0 && (
            <div className="product__price">
              <span className="product__ammount">
                {originalPrice.toFixed(0)}đ
              </span>
            </div>
          )}
          {discount > 0 && (
            <OldNewPrice originalPrice={originalPrice} discount={discount} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
