import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import ContactArea from "@components/contact/contact-area";


export default function Contact() {
  return (
    <Wrapper>
      <SEO pageTitle={"Liên hệ"} />
      <Header style_2={true}/>
      <ContactArea/>
      <Footer/>
    </Wrapper>
  );
}
