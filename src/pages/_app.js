import { ToastContainer } from "react-toastify";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { Provider } from "react-redux";
import { store } from "src/redux/store";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import "../styles/index.scss";

// stripePromise
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <Elements stripe={stripePromise}> */}
      <Component {...pageProps} />
      {/* </Elements> */}
      <ToastContainer />
      {/*<MessengerCustomerChat
        pageId={process.env.NEXT_PUBLIC_PAGE_ID}
        appId={process.env.NEXT_PUBLIC_APP_ID}
        htmlRef={process.env.NEXT_PUBLIC_REF_STRING}
      /> */}
    </Provider>
  );
}

export default MyApp;
