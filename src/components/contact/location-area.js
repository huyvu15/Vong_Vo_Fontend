import React from "react";
import Image from "next/image";
// internal
import location_icon_1 from "@assets/img/contact/contact-location-1.png";
import location_icon_2 from "@assets/img/contact/contact-location-2.png";
import location_icon_3 from "@assets/img/contact/contact-location-3.png";

// single location item
function SingleLocationItem({ title, icon, location, tel, shop }) {
  return (
    <div className="contact__location-item">
      <div className="row align-items-center">
        <div className="col-lg-9 col-md-8 col-sm-7">
          <div className="contact__location-content d-lg-flex align-items-center">
            <h3 className="contact__location-title">{title}</h3>
            <div className="contact__location-info d-sm-flex flex-wrap align-items-center">
              <div className="contact__location-icon mr-45">
                <Image src={icon} alt="icon image" />
              </div>
              <div className="contact__location-content">
                <p>
                  <a href="mailto:contact.location@website.com">{location}</a>
                </p>
                <p>
                  <a href="tel:686-324-6838">{tel}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-5">
          <div className="contact__location-btn text-sm-end">
            <a
              rel="noreferrer"
              href={shop}
              target="_blank"
              className="tp-btn-border"
              style={{ textTransform: 'initial' }}
            >
              Xem vị trí
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const LocationArea = () => {
  return (
    <section className="contact__location-area pb-130 pt-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-7 offset-xl-1 col-md-8">
            <div className="tp-section-wrapper-2 mb-35">
              <span className="tp-section-subtitle-2 subtitle-mb-9">
                ĐỊA ĐIỂM
              </span>
              <h3 className="tp-section-title-2 font-40">
                Hãy đến và thăm các văn phòng của chúng tôi trên khắp đất nước
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 ">
            <div className="contact__location-wrapper">
              <SingleLocationItem
                title="Văn phòng Hai Bà Trưng"
                icon={location_icon_1}
                location="info@tiemcaivongne.store"
                shop="https://www.google.com/maps/place/12+Ng.+239+%C4%90.+Tr%C3%A2u+Qu%E1%BB%B3,+Tr%C3%A2u+Qu%E1%BB%B3,+Gia+L%C3%A2m,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0033157,105.9361369,17z/data=!3m1!4b1!4m5!3m4!1s0x3135a8cc387bfc93:0xe7d545422486d0d0!8m2!3d21.0033157!4d105.9387172?entry=ttu"
                tel="0827590544"
              />
              <SingleLocationItem
                title="Văn phòng Bạch Mai"
                icon={location_icon_2}
                location="info@tiemcaivongne.store"
                tel="0865662723"
                shop="https://www.google.com/maps/place/%C4%90%C3%A0+N%E1%BA%B5ng,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam/@16.0471648,108.1654205,13z/data=!3m1!4b1!4m6!3m5!1s0x314219c792252a13:0xfc14e3a044436487!8m2!3d16.0544068!4d108.2021667!16s%2Fg%2F11bc5hq_qy?entry=ttu"
              />
              <SingleLocationItem
                title="Văn phòng Thanh nhàn"
                icon={location_icon_3}
                location="info@tiemcaivongne.store"
                tel="0863565725"
                shop="https://www.google.com/maps/place/Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7546174,106.3648853,10z/data=!3m1!4b1!4m6!3m5!1s0x317529292e8d3dd1:0xf15f5aad773c112b!8m2!3d10.8230989!4d106.6296638!16zL20vMGhuNGg?entry=ttu"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationArea;
