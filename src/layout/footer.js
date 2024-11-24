import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import logo from "@assets/img/logo/logo-black.png";
import payment from "@assets/img/footer/footer-payment.png";
import SocialLinks from "@components/social";
import CopyrightText from "./copyright-text";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer__area footer__style-4"
          data-bg-color="footer-bg-white"
        >
          <div className="footer__top">
            <div className="container">
              <div className="row justify-content-between">
                {/* Cột Logo */}
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12">
                  <div className="footer__widget footer__widget-11 mb-50">
                    <div className="footer__logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" width={140} />
                      </Link>
                    </div>
                    <div className="footer__widget-content">
                      <p>
                        Để phát triển sự nghiệp tương lai cùng với công nghệ ngày càng phát triển,
                        một cái vòng tay cá nhân sẽ giúp bạn rất nhiều điều.
                      </p>
                      <div className="footer__social">
                        <SocialLinks />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cột Công ty */}
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12">
                  <div className="footer__widget mb-50">
                    <h3 className="footer__widget-title">Công ty</h3>
                    <ul>
                      <li><Link href="/about">Về chúng tôi</Link></li>
                      <li><Link href="/careers">Nghề nghiệp</Link></li>
                      <li><Link href="/reviews">Đánh giá</Link></li>
                      <li><Link href="/location">Địa điểm cửa hàng</Link></li>
                      <li><Link href="/blog">Blog của chúng tôi</Link></li>
                      
                    </ul>
                  </div>
                </div>

                {/* Cột Hỗ trợ */}
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12">
                  <div className="footer__widget mb-50">
                    <h3 className="footer__widget-title">Hỗ trợ</h3>
                    <ul>
                      <li><Link href="/faq">Câu hỏi thường gặp</Link></li>
                      {/* <li><Link href="/terms">Điều khoản & điều kiện</Link></li> */}
                      <li><Link href="/contact">Liên hệ chúng tôi</Link></li>
                      <li><Link href="/faq">Chính sách kiểm hàng</Link></li>
                      <li><Link href="/policy">Chính sách bảo mật</Link></li>
                      <li><Link href="/faq">Hướng dẫn mua hàng</Link></li>
                      <li><Link href="/faq">Hướng dẫn vận chuyển</Link></li>
                      
                    </ul>
                  </div>
                </div>

                {/* Cột Trò chuyện với chúng tôi */}
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="footer__widget mb-50">
                    <h3 className="footer__widget-title">Trò chuyện với chúng tôi</h3>
                    <h4>Tiệm cái vòng nè!</h4>
                    
                    <p className="footer__text">
                      Tìm một địa điểm gần bạn nhất. Nhìn thấy <a href="#">cửa hàng chúng tôi</a>.
                    </p>
                    {/* <p><a href="tel:+84827590544">+84 827 590 544</a></p> */}
                    <div className="footer__contact-call">
                      <span>
                         <a href="tel:84332811539">+84 827 590 544</a>
                      </span>
                    </div>
                    
                    {/* <p><a href="mailto:info@tiemcaivongne.store">info@tiemcaivongne.store</a></p> */}
                  <div className="footer__contact-mail">
                      <span>
                        <a href="mail  to:info@tiemcaivongne.store">
                          info@tiemcaivongne.store
                        </a>
                      </span>
                   </div>
                   <span style={{ color: "purple", textDecoration: "underline" }}>
                    <p>Chúc bạn ngày mới tốt lành 😘</p>
                   </span>
                  </div>
                </div>

                {/* Cột Widget Facebook */}
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="footer__widget footer__facebook">
                  <h3 className="footer__widget-title">Liên hệ qua Facebook</h3>
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftiemcaivongne&tabs=timeline&width=300&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      width="100%"
                      height="300"
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen="true"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="container">
              <div className="footer__bottom-inner">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="footer__copyright">
                      <CopyrightText />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="footer__payment text-sm-end">
                      <Image src={payment} alt="payment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;




// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// // internal
// import logo from '@assets/img/logo/logo-black.png';
// import payment from '@assets/img/footer/footer-payment.png';
// import SocialLinks from "@components/social";
// import CopyrightText from "./copyright-text";

// // single widget
// function SingleWidget({ col, col_2, col_3, title, contents }) {
//   return (
//     <div
//       className={`col-xxl-${col} col-xl-${col} col-lg-3 col-md-${col_2} col-sm-6"`}
//     >
//       <div className={`footer__widget mb-50 footer-col-11-${col_3}`}>
//         <h3 className="footer__widget-title">{title}</h3>
//         <div className="footer__widget-content">
//           <ul>
//             {contents.map((l, i) => (
//               <li key={i}>
//                 <Link href={`/${l.url}`}>{l.title}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// const Footer = () => {
//   return (
//     <>
//       <footer>
//         <div
//           className="footer__area footer__style-4"
//           data-bg-color="footer-bg-white"
//         >
//           <div className="footer__top">
//             <div className="container">
//               <div className="row">
//                 <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
//                   <div className="footer__widget footer__widget-11 mb-50 footer-col-11-1">
//                     <div className="footer__logo">
//                       <Link href="/">
//                         <Image src={logo} alt="logo" width={140}/>
//                       </Link>
//                     </div>

//                     <div className="footer__widget-content">
//                       <div className="footer__info">
//                         <p>
//                           Để phát triển sự nghiệp tương lai cùng với công nghệ ngày càng phát triển, một cái vòng tay cá nhân sẽ giúp bạn rất nhiều điều.
//                         </p>
//                         <div className="footer__social footer__social-11">
//                           <SocialLinks/>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <SingleWidget
//                   col="2"
//                   col_2="4"
//                   col_3="2"
//                   title="Công ty"
//                   contents={[
//                     { url: "#", title: "Về chúng tôi" },
//                     // { url: "#", title: "Nghề nghiệp" },
//                     { url: "#", title: "Địa điểm cửa hàng" },
//                     { url: "#", title: "Blog của chúng tôi" },
//                     { url: "#", title: "Đánh giá" },
//                   ]}
//                 />
//                 <SingleWidget
//                   col="2"
//                   col_2="3"
//                   col_3="3"
//                   title="Sản phẩm"
//                   contents={[
//                     { url: "#", title: "Vòng bện dây" },
//                     { url: "#", title: "Vòng hạt cườm" },
//                     { url: "#", title: "Vòng đôi" },
//                     { url: "#", title: "Vòng nam" },
//                     { url: "#", title: "Vòng nữ" },
//                   ]}
//                 />
//                 <SingleWidget
//                   col="2"
//                   col_2="3"
//                   col_3="4"
//                   title="Hỗ trợ"
//                   contents={[
//                     { url: "/faq", title: "Câu hỏi thường gặp" },
//                     { url: "/terms", title: "Điều khoản & điều kiện" },
//                     { url: "/contact", title: "Liên hệ chúng tôi" },
//                     // { url: "/policy", title: "Chính sách" },
//                     { url: "/faq", title: "Hướng dẫn mua hàng" },
//                     { url: "/faq", title: "Hướng dẫn thanh toán" },
//                     { url: "/faq", title: "Hướng dẫn vận chuyển" },
//                     { url: "/faq", title: "Hướng dẫn đổi/trả hàng" },
//                     { url: "/faq", title: "Chính sách kiểm hàng" },
//                     { url: "/policy", title: "Chính sách bảo mật" },
//                     // { url: "/about", title: "Về chúng tôi" },
//                   ]}
//                 />

//                 <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
//                   <div className="footer__widget mb-50 footer-col-11-5">
//                     <h3 className="footer__widget-title">Trò chuyện với chúng tôi</h3>
//                     <h4 href="#"> Tiệm cái vòng nè!</h4>
//                     <div className="footer__widget-content">
//                       <p className="footer__text">
//                         Tìm một địa điểm gần bạn nhất. Nhìn thấy{" "}
//                         <a href="#">cửa hàng chúng tôi</a>
//                       </p>
//                       <div className="footer__contact">
//                         <div className="footer__contact-call">
//                           <span>
//                             <a href="tel:84332811539">+84 827 590 544</a>
//                           </span>
//                         </div>
//                         <div className="footer__contact-mail">
//                           <span>
//                             <a href="mailto:info@tiemcaivongne.store">
//                               info@tiemcaivongne.store
//                             </a>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="footer__bottom">
//             <div className="container">
//               <div className="footer__bottom-inner">
//                 <div className="row">
//                   <div className="col-sm-6">
//                     <div className="footer__copyright">
//                       <CopyrightText />
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="footer__payment text-sm-end">
//                       <Image src={payment} alt="payment" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
