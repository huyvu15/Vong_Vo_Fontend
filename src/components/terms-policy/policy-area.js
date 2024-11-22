import React from "react";

const PolicyArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
                <h4 className="policy__meta">Ngày có hiệu lực: 25/03/2024</h4>
                <p>
                Tiemcaivongne biết rằng bạn quan tâm đến cách thông tin cá nhân của bạn được sử dụng và chia sẻ, đồng thời Tiemcaivongne rất coi trọng quyền riêng tư của bạn. Vui lòng đọc phần sau để tìm hiểu thêm về Chính sách quyền riêng tư của Tiemcaivongne (“Chính sách quyền riêng tư”). Chính sách quyền riêng tư này cũng cho bạn biết về các quyền và lựa chọn của bạn đối với Thông tin cá nhân của bạn cũng như cách bạn có thể liên hệ với chúng tôi để cập nhật thông tin liên hệ của bạn hoặc nhận câu trả lời cho các câu hỏi mà bạn có thể có về các biện pháp bảo mật của chúng tôi.
                </p>
                <p>
                Bằng cách sử dụng hoặc truy cập Dịch vụ theo bất kỳ cách nào, bạn thừa nhận rằng bạn chấp nhận các thông lệ và chính sách được nêu trong Chính sách quyền riêng tư này và qua đây bạn đồng ý rằng Tiemcaivongne sẽ thu thập, sử dụng và chia sẻ thông tin của bạn theo những cách sau. Hãy nhớ rằng việc sử dụng Dịch vụ của bạn luôn tuân theo các Điều khoản như được quy định tại http://localhost:3000/terms, bao gồm Chính sách quyền riêng tư này. Bất kỳ điều khoản nào Tiemcaivongne sử dụng trong Chính sách quyền riêng tư này mà không xác định chúng đều có định nghĩa được đưa ra trong Điều khoản.
                </p>
              </div>

              <div className="policy__item policy__item-2 mb-35">
                <h3 className="policy__title">Thu thập thông tin</h3>
                <p>
                Bạn có thể truy cập và thưởng thức Trang web của chúng tôi mà không tiết lộ bất kỳ Thông tin cá nhân nào về bản thân bạn. Tuy nhiên, để Dịch vụ hoạt động bình thường, chúng tôi cần bạn chia sẻ với chúng tôi một số Thông tin cá nhân nhất định.
                </p>

                <p>
                  Vì mục đích của Chính sách quyền riêng tư này, “Thông tin cá nhân” có nghĩa là thông tin xác định, liên quan đến, mô tả, có khả năng liên kết hợp lý hoặc có thể liên kết hợp lý, trực tiếp hoặc gián tiếp, với một người tiêu dùng, thiết bị hoặc hộ gia đình cụ thể. Nó không bao gồm thông tin tổng hợp hoặc không xác định danh tính hoặc thông tin công khai có sẵn hợp pháp từ hồ sơ chính phủ. 
                </p>
              </div>

              <div className="policy__list mb-35">
                <h3 className="policy__title">Sử dụng thông tin cá nhân</h3>
                <ul>
                  <li>Để cung cấp và duy trì Dịch vụ;</li>
                  <li>Để phát hiện, ngăn chặn và giải quyết các vấn đề kỹ thuật;</li>
                  <li>
                    Để đăng ký bạn làm người dùng và cung cấp các dịch vụ bạn yêu cầu;
                  </li>
                  <li>
                    Để quyết định có cung cấp cho bạn sản phẩm hoặc dịch vụ độc quyền hay không;
                  </li>
                  <li>Để thông báo cho bạn về những thay đổi dịch vụ của chúng tôi;</li>
                  <li>Để cung cấp dịch vụ chăm sóc và hỗ trợ khách hàng;</li>
                </ul>
              </div>
              <div className="policy__contact">
                <h3 className="policy__title policy__title-2">Liên hệ chúng tôi</h3>
                <p>Bạn có thể liên hệ với chúng tôi bất cứ lúc nào qua:</p>
                <ul>
                  <li>
                    Email:{" "}
                    <span>
                      <a href="mailto:Tiemcaivongne.com">info@tiemcaivongne.store</a>
                    </span>
                  </li>
                </ul>

                <div className="policy__address">
                  <p>
                    <a
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/Tr%C3%A2u+Qu%E1%BB%B3,+Gia+L%C3%A2m,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0084967,105.9270198,15z/data=!3m1!4b1!4m6!3m5!1s0x3135a8cfa8c9b137:0xd8bc142d32495692!8m2!3d21.0078386!4d105.9376756!16s%2Fg%2F122sxjxn?hl=vi-VN&entry=ttu"
                      target="_blank"
                    >
                      12 An Đào A <br /> Trâu Quỳ Gia Lâm, Hà Nội
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

export default PolicyArea;
