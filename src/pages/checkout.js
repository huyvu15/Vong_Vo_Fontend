import { useEffect } from "react";
import { useRouter } from "next/router";
// internal
import SEO from "@components/seo";
import Header from "@layout/header";
import CartBreadcrumb from "@components/cart/cart-breadcrumb";
import Wrapper from "@layout/wrapper";
import CouponArea from "@components/checkout/coupon-area";
import CheckoutArea from "@components/checkout/checkout-area";
import Footer from "@layout/footer";
import ShopCta from "@components/cta";
import useCheckoutSubmit from "@hooks/use-checkout-submit";

export default function Checkout() {
  const checkout_data = useCheckoutSubmit();
  const router = useRouter();
  useEffect(() => {
    const isAuthenticate = localStorage.getItem("auth");
    if(!isAuthenticate){
      router.push("/login")
    }
  },[router])
  return (
    <Wrapper>
      <SEO pageTitle={"Thanh toán"} />
      <Header style_2={true} />
      <CartBreadcrumb title="Thanh toán đơn hàng" subtitle="Thanh toán" />
      <CouponArea {...checkout_data} />
      <CheckoutArea {...checkout_data} />
      <ShopCta />
      <Footer />
    </Wrapper>
  );
}
