import React from "react";
import { useSelector } from "react-redux";
// internal
import OrderDetails from "./order-details";
import OrderSingleCartItem from "./order-single-cart-item";

const OrderArea = ({
  // stripe,
  error,
  register,
  errors,
  discountAmount,
  shippingCost,
  cartTotal,
  handleShippingCost,
  setClientSecret,
  isCheckoutSubmit,
}) => {
  const { cart_products } = useSelector((state) => state.cart);
  const handleCheckoutVNPay = () => {
    // set local storage payment method to vnpay
    localStorage.setItem("paymentMethod", "vnpay");

    // call api 
    // createPaymentUrl({
    //   amount: parseInt(cartTotal),
    //   bankCode: '',
    //   language: 'vn',
    //   info: ``
    // })
    //   .then((result) => {
    //     console.log(result);
    //     window.location.href = result.data.url;
    //   })
  }
  return (
    <div className="your-order mb-30 ">
      <h3>Đơn hàng</h3>
      <div className="your-order-table table-responsive">
        <table>
          <thead>
            <tr>
              <th className="product-name">Sản phẩm</th>
              <th className="product-total text-end">Tổng</th>
            </tr>
          </thead>
          <tbody>
            {cart_products?.map((item, i) => (
              <OrderSingleCartItem
                key={i}
                title={item.title}
                quantity={item.orderQuantity}
                price={item.originalPrice}
                discount={item.discount}
              />
            ))}
          </tbody>
          <tfoot>
            <OrderDetails
              register={register}
              errors={errors}
              discountAmount={discountAmount}
              cartTotal={cartTotal}
              shippingCost={shippingCost}
              handleShippingCost={handleShippingCost}
              setClientSecret={setClientSecret}
            />
          </tfoot>
        </table>
      </div>

      <div className="payment-method faq__wrapper tp-accordion">
        <div className="accordion" id="checkoutAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="checkoutOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#bankOne"
                aria-expanded="true"
                aria-controls="bankOne"
              >
                Thanh toán bằng VNPay
              </button>
            </h2>
            <div
              id="bankOne"
              className="accordion-collapse collapse show"
              aria-labelledby="checkoutOne"
              data-bs-parent="#checkoutAccordion"
            >
              <div className="accordion-body">
                <button
                  className="tp-btn"
                  type="submit"
                  onClick={handleCheckoutVNPay}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="checkoutTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#bankTwo"
                aria-expanded="false"
                aria-controls="bankTwo"
              >
                Thanh toán khi nhận hàng
                <span className="accordion-btn"></span>
              </button>
            </h2>
            <div
              id="bankTwo"
              className="accordion-collapse collapse"
              aria-labelledby="checkoutTwo"
              data-bs-parent="#checkoutAccordion"
            >
              <div className="accordion-body">
                <p>
                  Thanh toán khi nhận hàng, bạn sẽ thanh toán khi nhận được
                  hàng tại nhà.
                </p>
                <div className="order-button-payment mt-25">
                  <button
                    type="submit"
                    className="tp-btn"
                    disabled={cart_products.length === 0 || isCheckoutSubmit}
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderArea;
