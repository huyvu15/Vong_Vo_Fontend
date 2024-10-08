import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import SEO from "@components/seo";
import SectionTop from "@components/terms-policy/section-top-bar";
import PolicyArea from "@components/terms-policy/policy-area";

export default function Policy() {
  return (
    <Wrapper>
      <SEO pageTitle={"Chính sách"} />
      <Header style_2={true} />
      <SectionTop
        title="Chính sách bảo mật"
        subtitle={
          <>
            Quyền riêng tư của bạn rất quan trọng với chúng tôi. Chính sách của Tiemcaivongne là tôn trọng quyền riêng tư của bạn liên quan đến <br />
            bất kỳ thông tin nào chúng tôi có thể thu thập từ bạn trên trang web của chúng tôi http://localhost:3000, 
            <br /> và các trang web khác mà chúng tôi sở hữu và vận hành.
          </>
        }
      />
      <PolicyArea/>
      <Footer/>
    </Wrapper>
  );
}
