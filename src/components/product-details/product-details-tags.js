import React from 'react';

const ProductDetailsTags = ({ tag }) => {
  return (
    <div className="product__details-tags">
      <span>Thẻ tags:</span>
      {tag?.map((t, i) => (
        <a key={i} href="#">
          {t}
        </a>
      ))}
    </div>
  );
};

export default ProductDetailsTags;