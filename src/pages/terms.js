import SEO from "@components/seo";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import SectionTop from "@components/terms-policy/section-top-bar";
import Footer from "@layout/footer";
import TermsArea from "@components/terms-policy/terms-area";

export default function Terms() {
  return (
    <Wrapper>
      <SEO pageTitle={"Điều khoản"} />
      <Header style_2={true} />
      <SectionTop
        title="Các điều khoản và điều kiện"
        subtitle="Những từ có chữ cái đầu được viết hoa có nghĩa được xác định theo các điều kiện sau. Các định nghĩa sau đây sẽ có cùng ý nghĩa bất kể chúng xuất hiện ở số ít hay số nhiều."
      />
      <TermsArea/>
      <Footer />
    </Wrapper>
  );
}
