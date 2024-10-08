import Link from "next/link";
import React from "react";

const FaqBreadcrumb = () => {
  return (
    <section className="breadcrumb__area breadcrumb__style-8 p-relative include-bg pt-110 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-8 col-lg-10">
            <div className="breadcrumb__content text-center p-relative z-index-1">
              <h3 className="breadcrumb__title">Câu hỏi thường gặp</h3>
              <div className="breadcrumb__list">
                <span>
                  <Link href="/">Trang chủ</Link>
                </span>
                <span className="dvdr">
                  <i className="fa-solid fa-circle-small"></i>
                </span>
                <span>Câu hỏi thường gặp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqBreadcrumb;
