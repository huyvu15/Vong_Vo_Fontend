import Link from "next/link";
import React from "react";

const TermsArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
                <h4 className="policy__meta">
                 Cập nhật lần cuối: ngày 18 tháng 10 năm 2024
                </h4>
                <p>
                Đây là các Điều khoản và Điều kiện quy định việc sử dụng Dịch vụ này và thỏa thuận được thực hiện giữa Bạn và Công ty. Các Điều khoản và Điều kiện này xác định quyền và nghĩa vụ của tất cả người dùng liên quan đến việc sử dụng Dịch vụ. Việc bạn truy cập và sử dụng Dịch vụ phụ thuộc vào việc bạn chấp nhận và tuân thủ các Điều khoản và Điều kiện này. Các Điều khoản và Điều kiện này áp dụng cho tất cả khách truy cập, người dùng và những người khác truy cập hoặc sử dụng Dịch vụ.
                </p>
                <p>
                Bằng cách sử dụng hoặc truy cập Dịch vụ theo bất kỳ cách nào, bạn xác nhận rằng bạn chấp nhận các thực hành và chính sách được nêu trong Chính sách Bảo mật này, và bạn đồng ý rằng Chúng tôi sẽ thu thập, sử dụng và chia sẻ thông tin của bạn theo các cách sau đây. Hãy nhớ rằng việc bạn sử dụng Dịch vụ luôn phải tuân theo các Điều khoản như đã quy định tại https://tiemcaivongne.store/legal/terms, bao gồm cả Chính sách Bảo mật này. Bất kỳ thuật ngữ nào mà Chúng tôi sử dụng trong Chính sách Bảo mật này mà không được định nghĩa đều có các định nghĩa đã được đưa ra trong Điều khoản.
                </p>
              </div>

              <div className="policy__item policy__item-2 mb-35">
                <h3 className="policy__title">Định nghĩa</h3>
                <p>
                Các từ mà chữ cái đầu được viết hoa có ý nghĩa được định nghĩa theo các điều kiện sau đây. Các định nghĩa sau sẽ có cùng ý nghĩa dù chúng xuất hiện ở dạng số ít hay số nhiều.
                </p>
              </div>

              <div className="policy__list mb-35">
                <h3 className="policy__title">
                Mục đích của các Điều khoản và Điều kiện này:
                </h3>
                <ul>
                  <li>
                    <strong>Đối tác liên kết</strong> có nghĩa là một thực thể kiểm soát, bị kiểm soát bởi hoặc cùng chịu sự kiểm soát với một bên, trong đó "kiểm soát" nghĩa là sở hữu 50% hoặc nhiều hơn cổ phần, lợi ích vốn hoặc các chứng khoán khác có quyền bỏ phiếu để bầu cử giám đốc hoặc cơ quan quản lý khác.
                  </li>
                  <li>
                    <strong>Quốc gia</strong> đề cập đến: California, Hoa Kỳ
                  </li>
                  <li>
                    <strong>Công ty</strong> (được gọi là "Công ty", "Chúng tôi", "Chúng ta" hoặc "Của Chúng tôi" trong Thỏa thuận này) đề cập đến Chúng tôi.
                  </li>
                  <li>
                    <strong>Thiết bị</strong> có nghĩa là bất kỳ thiết bị nào có thể truy cập Dịch vụ, chẳng hạn như máy tính, điện thoại di động hoặc máy tính bảng kỹ thuật số.
                  </li>
                  <li>
                    <strong>Dịch vụ</strong> đề cập đến Trang web.
                  </li>
                  <li>
                    <strong>Trang web</strong> đề cập đến Chúng tôi, có thể truy cập tại{" "}
                    <Link
                      href="/"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      Tiemcaivongne.store
                    </Link>
                  </li>

                </ul>
              </div>
              <div className="policy__contact">
                <h3 className="policy__title policy__title-2">Contact us</h3>
                <p>Bạn có thể liên hệ với chúng tôi bất cứ lúc nào qua:</p>

                <ul>
                  <li>
                    Email:{" "}
                    <span>
                      <a href="mailto:tiemcaivongne.store">tiemcaivongne@gmail.com</a>
                    </span>
                  </li>
                </ul>

                <div className="policy__address">
                  <p>
                    <a
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723"
                      target="_blank"
                    >
                      Tiemcaivongne <br /> Ngõ 90 Tôn Đức Thắng, Quốc Tử Giám, Đống Đa, Hanoi, Vietnam
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsArea;
