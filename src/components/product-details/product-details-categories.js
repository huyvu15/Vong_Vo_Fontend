import React from "react";

const ProductDetailsCategories = ({name}) => {
  return (
    <div className="product__details-categories product__details-more">
      <p>Thể loại:</p>
      <span>
        <a href="#">{" "}{name}</a>
      </span>
    </div>
  );
};

export default ProductDetailsCategories;
