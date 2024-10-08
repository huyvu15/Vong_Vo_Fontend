import StarRating from 'react-rating';
import star_gray from "@assets/img/rating/star-grey.png";
import star_red from "@assets/img/rating/star-red.png";
import star_yellow from "@assets/img/rating/star-yellow.png";
import Image from "next/image";
import { usePostReviewMutation } from "src/redux/features/productApi";
import { useState } from "react";
import { notifyError, notifySuccess } from "@utils/toast";
import { setReviews } from "src/redux/features/reviewSlice";
import { useDispatch, useSelector } from "react-redux";

const ReviewForm = ({product}) => {
  const auth = localStorage.getItem("auth");
  const user = JSON.parse(auth)?.user;
  const [ message, setMessage ] = useState("");
  const [ rating, setRating ] = useState(5);
  const [postReview, {}] = usePostReviewMutation();
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.review);
  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      rating,
      message,
    }
    postReview({productId: product._id, user: user._id, review})
    .then((res) => {
      notifySuccess("Thêm đánh giá thành công");
      dispatch(setReviews([...reviews, {...res.data.data, user}]));
    }).catch((err) => {
      notifyError("Có lỗi xảy ra");
    });
  }
  return (
    <div className="product__details-review-form">
      {
        auth ? (<form onSubmit={handleSubmit}>
          {/* Rating */}
          <div className="product__details-review-form-group">
            <StarRating
              placeholderRating={rating}
              emptySymbol={<Image src={star_gray} className="icon" />}
              placeholderSymbol={<Image src={star_red} className="icon" />}
              fullSymbol={<Image src={star_yellow} className="icon" />}
              onChange={(rate) => setRating(rate)}
            />
          </div>
          <div className="product__details-review-form-group mt-10">
            <textarea id="review-message" placeholder="Viết đánh giá của bạn" onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button type="submit" className="tp-btn">Gửi đánh giá</button>
        </form>) : (<p>Hãy <a href="/login">đăng nhập</a> để thêm đánh giá</p>)
      }
    </div>
  );
}

export default ReviewForm;