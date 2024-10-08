// external
import Link from "next/link";
// internal
import Wrapper from "@layout/wrapper";
import SEO from "@components/seo";
import Header from "@layout/header";
import {ErrorSvg, RightArrowThree} from "@svg/index";
import ShopCta from "@components/cta";
import Footer from "@layout/footer";

export default function ErrorPage() {
  return (
    <Wrapper>
      <SEO pageTitle={"Không tìm thấy trang"} />
      <Header style_2={true} />
      {/* error area start */}
      <section className="error__area error__bg pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="error__wrapper p-relative z-index-1 text-center">
                <h3 className="error__text">404</h3>
                <div className="error__thumb mb-35">
                  <ErrorSvg />
                </div>
                <div className="error__content">
                  <h3 className="error__title">Ôi! Không tìm thấy trang</h3>
                  <p>
                    Rất tiếc, điều này thật tồi tệ. Có vẻ như trang bạn đã ở trang
                    tìm kiếm không thấy.
                  </p>
                  <Link href="/" className="tp-btn">
                    Trở về trang chủ
                    <RightArrowThree/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* error area end */}
      <ShopCta/>
      <Footer/>
    </Wrapper>
  );
}
