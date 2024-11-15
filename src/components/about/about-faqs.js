import React from "react";
// internal
import { Play } from "@svg/index";
import faq_bg from "@assets/img/faq/faq-img.jpg";
import SingleFaq from "@components/faq/single-faq";
import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";

const faq_items = [
  {
    id: "about-one",
    title: "Tôi có thể hủy tài khoản của mình bất cứ lúc nào không?",
    show: true,
    desc: "Chắc chắn rồi, khi bạn không còn nhu cầu mua hàng và muốn hủy tài khoản, đội ngũ của chúng tôi sẽ hỗ trợ bạn để hủy tài khoản kích hoạt.",
    parent: "faqaccordion",
  },
  {
    id: "about-two",
    title: "Điều gì xảy ra sau khi mã kích hoạt hết hạn?",
    desc: "Khi mã kích hoạt tài khoản hết hạn, bạn hãy liên hệ ngay với chúng tôi để chúng tôi cung cấp lại mã kích hoạt cho bạn hoặc bạn có thể thử thực hiện lại quy trình đăng ký.",
    parent: "faqaccordion",
  },
  {
    id: "about-three",
    title: "Bao giờ tôi nhận được tiền khi hủy đơn hàng?",
    desc: "Khi chúng tôi xác nhận hủy đơn hàng và kiểm tra hàng hoàn trả, chúng tôi sẽ hoàn trả tiền vào thẻ của bạn trong vòng 30 ngày.",
    parent: "faqaccordion",
  },
];

const AboutFaqs = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <section className="faq__area p-relative">
        <div
          className="faq__video"
          style={{ backgroundImage: `url(${faq_bg.src})` }}
        >
          <div className="faq__video-btn">
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setIsVideoOpen(true)}
              className="tp-pulse-border popup-video"
            >
              <Play />
            </a>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <div className="faq__wrapper-2 faq__gradient-border faq__style-2 tp-accordion pl-160">
                <div className="faq__title-wrapper">
                  <span className="faq__title-pre">
                    Hãy liên hệ ngau với chúng tôi
                  </span>
                  <h3 className="faq__title">
                    Cung cấp dịch vụ số thông minh và linh hoạt
                  </h3>
                </div>
                <div className="accordion" id="faqaccordion">
                  {faq_items.map((item) => (
                    <SingleFaq key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"ycp1gAQp9-U"}
      />
      {/* video modal end */}
    </React.Fragment>
  );
};

export default AboutFaqs;
