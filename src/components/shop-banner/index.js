import React from 'react';
import Link from 'next/link';
// internal
import banner from '@assets/img/banner/event.jpg';
import { RightArrow } from '@svg/index';

const ShopBanner = () => {
  return (
    <section className="banner__area">
      <div className="container">
        <div className="banner__inner include-bg" style={{backgroundImage:`url(${banner.src})`}}>
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="banner__content">
                <span>Vòng xinh cho các nàng</span>
                <h3 className="banner__title">
                  <Link href="/shop">Vòng xinh cho nàng điệu đà</Link>
                </h3>
                <p> <h4>Ưu đãi lên tới 32% !</h4> </p>

                <div className="banner__btn">
                  <Link href="/shop" className="tp-btn">
                    Mua ngay
                    <RightArrow/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;