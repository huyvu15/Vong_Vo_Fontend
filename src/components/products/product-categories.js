import React from "react";

const ProductCategories = ({category}) => {
  return (
    <div className="product__details-categories product__details-more">
      <p>Thể loại: {" "}</p>
      <span>
        <a href="#">{category?.name}</a>
      </span>
    </div>
  );
};

export default ProductCategories;
