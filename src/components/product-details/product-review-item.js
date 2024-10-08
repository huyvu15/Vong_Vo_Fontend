import React from "react";

const ProductReviewItem = ({ name, date, desc, rating }) => {
  return (
    <div className="product-review-item">
      <div className="product-review-avater d-flex align-items-center">
        <div className="text-uppercase tp-user-login-avater mr-10">
          {name[0]}
        </div>
        <div className="product-review-avater-info">
          <h4 className="product-review-avater-title">{name}</h4>
        </div>
      </div>
      <div className="product-review-rating d-flex align-items-center">
        <div className="product-review-rating-wrapper d-flex">
          {Array.from({ length: rating }, (_, i) => (
            <span key={i}>
              <i className="icon_star"></i>
            </span>
          ))}
          {Array.from({ length: 5 - rating }, (_, i) => (
            <span key={i}>
              <i className="icon_star_alt"></i>
            </span>
          ))}
        </div>
        <div className="product-review-rating-date">
          <span>{date}</span>
        </div>
      </div>
      <p>
        {desc}
      </p>
    </div>
  );
};

export default ProductReviewItem;
