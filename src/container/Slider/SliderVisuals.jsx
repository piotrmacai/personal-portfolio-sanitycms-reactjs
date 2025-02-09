import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { useTranslation } from "react-i18next";
import './SliderClean.scss';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SliderVisuals = () => {
  const { t } = useTranslation();
  return (
    <>
  <div className="sliderContainer">

        {/* <div className="slider_headers">
            <p className="slider_p">{t('portfolio_header_P')}</p>
            <h2 className="slider_h2">{t('portfolio_header_h')}</h2>
        </div> */}
          <section id="cta" className="ctaContainer">
          
                {/* <div className="heading_section_2">

                        <p className="cta_section_info_basicp">{t('visualscta_desc1')}</p>
                        <a href="/projects" target="_blank" rel="noreferrer">
                            <button className="newsBtn">{t('cta_portfolio')}</button>
                        </a>
                </div> */}
</section>
        <div className="sliderApp">
            <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
                        <SwiperSlide><img src={images.offerpdf} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.bottlecoctail} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.bottlephoto} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.statue} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.posteri} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.midposter} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.nikeair} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.bottlemockup} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.art3} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><a href="https://vimeo.com/1039849145" target="_blank" rel="noreferrer"><img src={images.video1} className="app_header-img" style={{ maxWidth: '80%', height: 'auto' }} alt="profile_bg" /></a></SwiperSlide>
                        <SwiperSlide><img src={images.webbanner} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.macaistudiobanner} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.behanceBanner} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.art2} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.aibanner} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.art1} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.gptbanner} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.ainsiderbanner1} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.productad1} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.nftlanding} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.ainsiderbanner2} className="app_header-img" style={{ maxWidth: '95%', height: 'auto' }} alt="profile_bg" /></SwiperSlide>
          </Swiper>
        </div>

        <div className="slider_headers">
                {/* <a href="/projects">
                        <button className="newsBtn">{t('cta_portfolio')}</button>
                 </a> */}
                         <Link to="/projects">
                        <button className="consBtn">{t('cta_portfolio')}</button>
                    </Link>
        </div>
          
   </div>
  </>
  )
};


// export default Slider
export default AppWrap(MotionWrap(SliderVisuals, 'app__slider'), 'slider', 'app__whitebg');