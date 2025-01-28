import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { useTranslation } from "react-i18next";
import './Slider.scss';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SliderDesign = () => {
  const { t } = useTranslation();
  return (
    <>
  <div className="sliderContainer">

        {/* <div className="slider_headers">
            <p className="slider_p">{t('portfolio_header_P')}</p>
            <h2 className="slider_h2">{t('portfolio_header_h')}</h2>
        </div> */}
          <section id="cta" className="ctaContainer">
            <div className="heading_mainsection">

                <div className="heading_section_1">                          
                    <h2 data-aos="zoom-in" className="cta_section_info_h2">
                    {t('designcta_subtitle1')}
                    </h2>                    
                    {/* <p className="cta_section_info_p"> {t('designcta_subtitle1')}</p>          */}
                </div>

                <div className="heading_section_2">

                        <p className="cta_section_info_basicp">{t('designcta_desc1')}</p>
                        {/* <a href="/design">
                            <button className="newsBtn">{t('cta_details')}</button>
                        </a> */}
                        <Link to="/design">
                          <button className="newsBtn">{t('cta_details')}</button>
                      </Link>
                </div>

            </div>
</section>

        <div className="sliderApp">
            <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
                        <SwiperSlide><img src={images.offerpdf} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.posteri} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.midposter} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.nikeair} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.bottlemockup} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.art3} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.webbanner} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.macaistudiobanner} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.behanceBanner} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.art2} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.aibanner} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.art1} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.gptbanner} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.insdr} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.ainsiderbanner1} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.volton_slider} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.productad1} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.macaistudiobanner} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.nftlanding} className="app_header-img" alt="profile_bg" /></SwiperSlide>
                        <SwiperSlide><img src={images.ainsiderbanner2} className="app_header-img" alt="profile_bg" /></SwiperSlide>

            {/* <SwiperSlide><a href="https://huggingface.co/chat/assistants?user=Piotr-Macai" target="_blank" rel="noreferrer"><img src={images.hfassistants} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>  */}
            {/* <SwiperSlide><a href="https://tools.ainsider.tech" target="_blank" rel="noreferrer"><img src={images.imgpromptr} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>            <SwiperSlide><a href="https://szkolajazdymachowski.pl" target="_blank" rel="noreferrer"><img src={images.szkolajazdychatbot_slider} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}
            {/* <SwiperSlide><a href="https://insdr.digital" target="_blank" rel="noreferrer"><img src={images.ainsidertoolsbot} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}
            {/* <SwiperSlide><a href="https://https://ainsider.beehiiv.com/" target="_blank" rel="noreferrer"><img src={images.beehiv} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}
           
          </Swiper>
        </div>

        <div className="slider_headers">
                {/* <a href="/projects" target="_blank" rel="noreferrer">
                            <button className="consBtn">{t('cta_portfolio')}</button>
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
export default AppWrap(MotionWrap(SliderDesign, 'app__slider'), 'slider', 'app__whitebg');
