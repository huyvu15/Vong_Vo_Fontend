import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "@svg/index";
import { decrement, increment } from "src/redux/features/cartSlice";

const ProductQuantity = ({product}) => {
  const { orderQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // handleIncrease
  const handleIncrease = () => {
    if (orderQuantity >= product.quantity) return;
    dispatch(increment());
  };
  // handleDecrease
  const handleDecrease = () => {
    if (orderQuantity <= 1) return;
    dispatch(decrement());
  };
  return (
    <div className="product__details-quantity">
      <div className="tp-product-quantity mt-10 mb-10">
        <span className="tp-cart-minus" onClick={handleDecrease}>
          <Minus />
        </span>
        <input
          className="tp-cart-input"
          type="text"
          value={orderQuantity}
          readOnly
        />
        <span className="tp-cart-plus" onClick={handleIncrease}>
          <Plus />
        </span>
      </div>
    </div>
  );
};

export default ProductQuantity;
