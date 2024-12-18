import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// internal
import { Compare, CartTwo, Times, HeartTwo } from "@svg/index";
import SocialLinks from "@components/social";
import OldNewPrice from "@components/products/old-new-price";
import Quantity from "@components/products/quantity";
import ProductCategories from "@components/products/product-categories";
import ProductTags from "@components/products/product-tags";
import { RatingFull, RatingHalf } from "@components/products/rating";
import { add_cart_product, initialOrderQuantity } from "src/redux/features/cartSlice";
import Link from "next/link";
import { add_to_wishlist } from "src/redux/features/wishlist-slice";
import { Modal } from "react-bootstrap";
import { handleModalShow } from "src/redux/features/productSlice";

const ProductModal = () => {
  const { product, isShow } = useSelector((state) => state.product);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { _id, image, relatedImages, title, tags, discount, originalPrice, sku, category } = product || {};
  const [activeImg, setActiveImg] = useState(image);
  const dispatch = useDispatch();
  const isWishlistAdded = wishlist.some((item) => item._id === _id);

  // handle add product
  const handleAddProduct = (prd) => {
    dispatch(add_cart_product(prd));
  };
  // initial Order Quantity
  // handle add wishlist
  const handleAddWishlist = (prd) => {
    dispatch(add_to_wishlist(prd));
  };
  // handle modal close 
  const handleModalClose = () => {
    dispatch(handleModalShow())
    dispatch(initialOrderQuantity())
  }

  return (
    <Modal
      show={isShow}
      onHide={() => dispatch(handleModalShow())}
      className="product__modal"
      centered={true}
    >
      <div className="product__modal-wrapper">
        <div className="product__modal-close">
          <button
            className="product__modal-close-btn"
            type="button"
            onClick={() => handleModalClose()}
          >
            <Times />
          </button>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="product__modal-thumb-wrapper">
              <div className="product__details-thumb-tab mr-40">
                <div className="product__details-thumb-content w-img">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="active-img">
                      <Image
                        src={activeImg}
                        alt="image"
                        width={510}
                        height={485}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="product__details-thumb-nav tp-tab">
                  <nav>
                    <div className="nav nav-tabs justify-content-sm-between">
                      {relatedImages.map((img, i) => (
                        <button
                          key={i}
                          className={`nav-link ${img === activeImg ? "active" : ""
                            }`}
                          onClick={() => setActiveImg(img)}
                        >
                          <Image
                            src={img}
                            alt="image"
                            width={90}
                            height={90}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </button>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product__details-wrapper">
              <h3 className="product__details-title">{title}</h3>
              <p className="mt-20">
                Mua hàng tại Tiemcaivongne hàng ngày để nhận ưu đãi. Miễn phí giao hàng cho đơn trên 1.000.000đ
              </p>
              {/* Price */}
              <OldNewPrice
                originalPrice={originalPrice}
                discount={discount}
              />
              {/* Price */}

              {/* quantity */}
              <Quantity />
              {/* quantity */}
              <div className="product__details-action d-flex flex-wrap align-items-center">
                <button
                  onClick={() => handleAddProduct(product)}
                  type="button"
                  className="product-add-cart-btn product-add-cart-btn-3"
                >
                  <CartTwo />
                  Thêm giỏ hàng
                </button>
                <button
                  onClick={() => handleAddWishlist(product)}
                  type="button"
                  className={`product-action-btn ${isWishlistAdded ? "active" : ""
                    }`}
                >
                  <HeartTwo />
                  <span className="product-action-tooltip">
                    Thêm yêu thích
                  </span>
                </button>
                <Link href={`/product-details/${_id}`}>
                  <button type="button" className="product-action-btn">
                    <i className="fa-solid fa-link"></i>
                    <span className="product-action-tooltip">
                      Chi tiết sản phẩm
                    </span>
                  </button>
                </Link>
              </div>
              <div className="product__details-sku product__details-more">
                <p>Mã hàng:</p>
                <span>{sku}</span>
              </div>
              {/* Product Categories */}
              <ProductCategories category={category}/>
              {/* Product Categories */}

              {/* Tags */}
              <ProductTags tag={tags} />
              {/* Tags */}
              <div className="product__details-share">
                <span>Chia sẻ:</span>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
