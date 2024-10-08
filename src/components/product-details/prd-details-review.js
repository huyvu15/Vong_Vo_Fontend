import React from "react";
// internal
import ProductReviewItem from "./product-review-item";
import ReviewForm from "@components/forms/review-form";
import { useGetReviewQuery } from "src/redux/features/productApi";
import { useSelector, useDispatch } from "react-redux";
import { setReviews } from "src/redux/features/reviewSlice";

// single rating bar
function SingleRatingBar({ text, progress }) {
  return (
    <div className="product-rating-bar-item d-flex align-items-center">
      <div className="product-rating-bar-text">
        <span>{text}</span>
      </div>
      <div className="product-rating-bar">
        <div className="single-progress" style={{ width: progress }}></div>
      </div>
    </div>
  );
}

const PrdDetailsReview = ({ product }) => {
  const {
    data,
    isLoading,
    isError,
  } = useGetReviewQuery(product._id);
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.review);
  if (reviews.length == 0 && data?.data) {
    dispatch(setReviews(data.data));
  }
  if (reviews.length > 0 && reviews[0].productId !== product._id) {
    if(data?.data) dispatch(setReviews(data.data))
    else dispatch(setReviews([]));
  }
  const ratingPercentage = (rating) => {
    return (rating / reviews.length) * 100;
  }
  return (
    <div className="product__details-review pt-30 container pb-60">
      {
        !isLoading && !isError && reviews.length > 0 ? (
          <div className="row">
            <div className="col-xl-9">
              <div className="">
                <div className="product-rating">
                  <h4 className="product-rating-title">Đánh giá</h4>
                  <div className="product-rating-wrapper d-flex flex-wrap align-items-center mb-50">
                    <div className="product-rating-number mr-40">
                      <h4 className="product-rating-number-title">
                        {(reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length).toFixed(1)}
                      </h4>
                      <div className="product-rating-star">
                        {Array.from({ length: Math.floor(reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length) }, (_, i) => (
                          <span key={i}>
                            <i className="icon_star"></i>
                          </span>
                        ))}
                        {Array.from({ length: 5 - Math.floor(reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length) }, (_, i) => (
                          <span key={i}>
                            <i className="icon_star_alt"></i>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="product-rating-bar-wrapper">
                      {
                        Array.from({ length: 5 }, (_, i) => (
                          <SingleRatingBar key={i} text={5 - i} progress={`${ratingPercentage(reviews.filter((item) => item.rating === 5 - i).length)}%`} />
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div className="product__details-review-list mb-35">
                  {
                    reviews.map((review) => (
                      <ProductReviewItem
                        key={review._id}
                        name={review.user.name}
                        date={new Date(review.createdAt).toLocaleDateString()}
                        desc={review.message}
                        rating={review.rating}
                      />
                    ))
                  }
                </div>
                <div className="product-review-form">
                  <h3 className="product-review-form-title">Thêm đánh giá</h3>
                  {/* review form start */}
                  <ReviewForm product={product} />
                  {/* review form end */}
                </div>
              </div>
            </div>
          </div>
        )
          :
          <div>
            <h4>Chưa có đánh giá nào</h4>
            <ReviewForm product={product} />
          </div>
      }
    </div>
  );
};

export default PrdDetailsReview;
