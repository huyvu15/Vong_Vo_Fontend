import React from "react";
// internal
import { DotsTwo, General, Support } from "@svg/index";
import FaqThumb from "./faq-thumb";
import SingleFaq from "./single-faq";

// single nav
function NavItem({ active, id, title, icon }) {
  return (
    <button
      className={`nav-link ${active ? "active" : ""}`}
      id={`nav-${id}-tab`}
      data-bs-toggle="tab"
      data-bs-target={`#${id}`}
      type="button"
      role="tab"
      aria-controls={`nav-${id}`}
      aria-selected={active ? "true" : "false"}
      tabIndex="-1"
    >
      <span>{icon}</span>
      {title}
    </button>
  );
}

// TabItem
export function TabItem({ active, id, accordion_items }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={`${id}`}
      role="tabpanel"
      aria-labelledby={`nav-${id}-tab`}
    >
      {/* <!-- faq item one of community question --> */}
      {accordion_items.map((item, i) => (
        <div key={i} className="faq__item pb-95">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="faq__content">
                <h3 className="faq__title-2">{item.title}</h3>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="faq__wrapper faq__style-4 tp-accordion">
                <div className="accordion" id={`${id}-${i + 1}_accordion`}>
                  {item.accordions.map((item) => (
                    <SingleFaq key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


const FaqArea = ({ element_faq = false }) => {
  // tab item
  return (
    <React.Fragment>
      {/* faq thumb start */}
      {!element_faq && <FaqThumb />}
      {/* faq thumb end */}

      {/* faq area start */}
      <section className="faq__area pt-100 pb-25">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__tab-2 tp-tab mb-50">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <NavItem
                      active={true}
                      id="general"
                      icon={<General />}
                      title="Câu hỏi chung"
                    />
                  </li>
                  <li className="nav-item" role="presentation">
                    <NavItem
                      id="community"
                      icon={<DotsTwo />}
                      title="Hoàn tiền"
                    />
                  </li>
                  <li className="nav-item" role="presentation">
                    <NavItem id="support" icon={<Support />} title="Hỗ trợ giảm giá" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="faq__item-wrapper">
            <div className="tab-content" id="faqTabContent">
              {/* general */}
              <TabItem
                active={true}
                id="general"
                accordion_items={[
                  {
                    title: (
                      <>
                        Đơn hàng <br />& Phí giao hàng
                      </>
                    ),
                    accordions: [
                      {
                        id: "One",
                        title: "Tối ưu hóa công cụ tìm kiếm",
                        show: true,
                        desc: "Chúng tôi cam kết cung cấp trải nghiệm mua sắm trực tuyến thuận lợi nhất cho bạn bằng cách tối ưu hóa công cụ tìm kiếm trên trang web. Tìm kiếm sản phẩm một cách nhanh chóng và dễ dàng để tìm thấy những gì bạn cần.",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "Two",
                        title: "Tích hợp truyền thông xã hội hoàn chỉnh",
                        desc: "Chúng tôi không chỉ cung cấp sản phẩm chất lượng mà còn tạo ra một cộng đồng mua sắm trực tuyến sôi động. Với tích hợp truyền thông xã hội, bạn có thể chia sẻ trải nghiệm của mình và kết nối với những người mua khác.",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "Three",
                        title: "Chiến lược xây dựng thương hiệu",
                        desc: "Tiemcaivongne không chỉ là nơi để mua sắm, mà còn là thương hiệu mà bạn có thể tin cậy. Chúng tôi cam kết xây dựng một thương hiệu uy tín và mang lại sự hài lòng tối đa cho khách hàng.",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "four",
                        title: "Tôi nhận được hỗ trợ và cập nhật trong bao lâu?",
                        desc: "Chúng tôi luôn lắng nghe và hỗ trợ bạn trong quá trình mua sắm và sau khi mua hàng. Bất kỳ câu hỏi hoặc phản hồi nào từ bạn đều được đón nhận và giải quyết nhanh chóng. Chúng tôi cam kết cập nhật thông tin về đơn hàng của bạn một cách kịp thời và đáng tin cậy.",
                        parent: "general-1_accordion",
                      },
                    ],
                  },
                  {
                    title: (
                      <>
                        Hoàn trả <br />& Hoàn tiền
                      </>
                    ),
                    accordions: [
                      {
                        id: "five",
                        title: "Làm sao tôi biết gói hàng của tôi đã được chuyển đi?",
                        show: true,
                        desc: "Khi đơn hàng của bạn được chuyển đi, chúng tôi sẽ cung cấp thông tin về việc giao hàng và số theo dõi của đơn hàng để bạn có thể theo dõi trạng thái vận chuyển.",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "six",
                        title:
                          "Tại sao một số sản phẩm nhất định không có sẵn để vận chuyển?",
                        desc: "Có những trường hợp sản phẩm có thể tạm thời hết hàng hoặc không có sẵn để vận chuyển tới địa chỉ của bạn. Trong trường hợp này, chúng tôi sẽ thông báo cho bạn và cung cấp các phương án thay thế hoặc hoàn tiền.",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "seven",
                        title: "Tại sao số theo dõi của tôi không cập nhật?",
                        desc: "Đôi khi có thể xảy ra trường hợp mà thông tin về số theo dõi không được cập nhật ngay lập tức do các vấn đề liên quan đến dịch vụ vận chuyển. Tuy nhiên, bạn có thể yên tâm rằng đơn hàng của bạn đang được chúng tôi theo dõi và chúng tôi sẽ cập nhật thông tin mới nhất cho bạn khi có sẵn.",
                        parent: "general-2_accordion",
                      },
                    ],
                  },
                  {
                    title: "Giảm giá",
                    accordions: [
                      {
                        id: "eight",
                        title: "Làm sao tôi biết gói hàng của tôi được giảm giá?",
                        show: true,
                        desc: "Khi bạn mua sản phẩm được áp dụng giảm giá, chúng tôi sẽ hiển thị giá giảm giá trên trang sản phẩm và trong giỏ hàng của bạn. Bạn có thể yên tâm rằng bạn đang nhận được giá ưu đãi tốt nhất từ chúng tôi.",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "nine",
                        title:
                          "Tôi được thêm nhiều mã giảm giá cùng lúc không?",
                        desc: "Thường thì chỉ có thể áp dụng một mã giảm giá cho mỗi đơn hàng. Tuy nhiên, đôi khi chúng tôi có thể có các chương trình khuyến mãi đặc biệt cho phép áp dụng nhiều mã giảm giá cùng lúc. Bạn có thể kiểm tra các điều kiện và điều khoản của chương trình khuyến mãi để biết thêm chi tiết.",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "ten",
                        title: "Tại sao không cập nhật giảm giá?",
                        desc: "Nếu bạn gặp bất kỳ vấn đề nào liên quan đến giảm giá, vui lòng liên hệ với chúng tôi để được hỗ trợ. Chúng tôi sẽ kiểm tra và giải quyết vấn đề để đảm bảo bạn nhận được giá ưu đãi mà bạn đang mong muốn.",
                        parent: "general-3_accordion",
                      },
                    ],
                  },

                ]}
              />

              {/* community */}
              <TabItem
                id="community"
                accordion_items={[
                  {
                    title: (
                      <>
                        Hoàn trả <br />& Hoàn tiền
                      </>
                    ),
                    accordions: [
                      {
                        id: "five",
                        title: "Làm sao tôi biết gói hàng của tôi đã được chuyển đi?",
                        show: true,
                        desc: "Khi đơn hàng của bạn được chuyển đi, chúng tôi sẽ cung cấp thông tin về việc giao hàng và số theo dõi của đơn hàng để bạn có thể theo dõi trạng thái vận chuyển.",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "six",
                        title:
                          "Tại sao một số sản phẩm nhất định không có sẵn để vận chuyển?",
                        desc: "Có những trường hợp sản phẩm có thể tạm thời hết hàng hoặc không có sẵn để vận chuyển tới địa chỉ của bạn. Trong trường hợp này, chúng tôi sẽ thông báo cho bạn và cung cấp các phương án thay thế hoặc hoàn tiền.",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "seven",
                        title: "Tại sao số theo dõi của tôi không cập nhật?",
                        desc: "Đôi khi có thể xảy ra trường hợp mà thông tin về số theo dõi không được cập nhật ngay lập tức do các vấn đề liên quan đến dịch vụ vận chuyển. Tuy nhiên, bạn có thể yên tâm rằng đơn hàng của bạn đang được chúng tôi theo dõi và chúng tôi sẽ cập nhật thông tin mới nhất cho bạn khi có sẵn.",
                        parent: "general-2_accordion",
                      },
                    ],
                  },
                  
                ]}
              />

              {/* support */}
              <TabItem
                id="support"
                accordion_items={[
                  {
                    title: "Giảm giá",
                    accordions: [
                      {
                        id: "eight",
                        title: "Làm sao tôi biết gói hàng của tôi được giảm giá?",
                        show: true,
                        desc: "Khi bạn mua sản phẩm được áp dụng giảm giá, chúng tôi sẽ hiển thị giá giảm giá trên trang sản phẩm và trong giỏ hàng của bạn. Bạn có thể yên tâm rằng bạn đang nhận được giá ưu đãi tốt nhất từ chúng tôi.",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "nine",
                        title:
                          "Tôi được thêm nhiều mã giảm giá cùng lúc không?",
                        desc: "Thường thì chỉ có thể áp dụng một mã giảm giá cho mỗi đơn hàng. Tuy nhiên, đôi khi chúng tôi có thể có các chương trình khuyến mãi đặc biệt cho phép áp dụng nhiều mã giảm giá cùng lúc. Bạn có thể kiểm tra các điều kiện và điều khoản của chương trình khuyến mãi để biết thêm chi tiết.",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "ten",
                        title: "Tại sao không cập nhật giảm giá?",
                        desc: "Nếu bạn gặp bất kỳ vấn đề nào liên quan đến giảm giá, vui lòng liên hệ với chúng tôi để được hỗ trợ. Chúng tôi sẽ kiểm tra và giải quyết vấn đề để đảm bảo bạn nhận được giá ưu đãi mà bạn đang mong muốn.",
                        parent: "general-3_accordion",
                      },
                    ],
                  },
                  
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      {/* faq area end */}
    </React.Fragment>
  );
};

export default FaqArea;
