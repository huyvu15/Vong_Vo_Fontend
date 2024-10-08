import React from 'react';

const ProductTags = ({ tag }) => {
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

export default ProductTags;