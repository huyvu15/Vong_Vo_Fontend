import React, { useState } from "react";
// internal
import SingleProduct from "./single-product";
import ErrorMessage from "@components/error-message/error";
import ProductLoader from "@components/loader/product-loader";
import { useGetShowingProductsQuery } from "src/redux/features/productApi";
// internal

// tab items
const tabs = ["best-selling", "latest-product"];

const ShopProducts = () => {
  const { data: products, isError, isLoading } = useGetShowingProductsQuery();
  const [activeTab, setActiveTab] = useState("best-selling");
  // handle tab product
  const handleTabProduct = (value) => {
    setActiveTab(value);
  };

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <ProductLoader loading={isLoading} />
    );
  }

  if (!isLoading && isError) {
    content = <ErrorMessage message="Có lỗi xảy ra" />;
  }

  if (!isLoading && !isError && products?.products?.length === 0) {
    content = <ErrorMessage message="Không tìm thấy sản phẩm!" />;
  }

  if (!isLoading && !isError && products?.products?.length > 0) {
    const prd_items = products.products;
    var show_prd = [...prd_items];
    // if (activeTab === "top-rated") {
    //   show_prd = show_prd.filter((item) => item.itemInfo === activeTab).slice(0, 8);
    // } else 
    if (activeTab === "best-selling") {
      show_prd = products.bestSellingProducts;
    } else {
      show_prd = show_prd.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 8);
    }
    // const show_prd = prd_items.filter((item) => item.itemInfo === activeTab);
    content = show_prd.map((product) => (
      <div key={product._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <SingleProduct product={product} />
      </div>
    ));
  }
  return (
    <>
      <section className={`product__popular-area pb-20`}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="section__title-wrapper-13 mb-35">
                <h3 className="section__title-13">Sản phẩm phổ biến</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="product__tab tp-tab  mb-35">
                <ul
                  className="nav nav-tabs justify-content-md-end"
                  id="productTab"
                >
                  {tabs.map((tab, i) => (
                    <li
                      key={i}
                      className="nav-item"
                      onClick={() => handleTabProduct(tab)}
                    >
                      <button
                        className={`nav-link text-capitalize ${
                          activeTab === tab ? "active" : ""
                        }`}
                        id="top-tab"
                        type="button"
                      >
                        {tab === "best-selling" ? "Bán chạy" : "Mới nhất"}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="product__tab-wrapper">
            <div className="row">{content}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopProducts;
