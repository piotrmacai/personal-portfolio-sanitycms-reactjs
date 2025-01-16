import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { useTranslation } from "react-i18next";
import './SliderClean.scss';
import './Heading.scss';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SliderWebClean = () => {
  const { t } = useTranslation();
  return (
    <>
  <div className="sliderContainer clean">

            {/* <p className="slider_p">{t('portfolio_header_P')}</p>
            <h2 className="slider_h2">{t('portfolio_header_h')}</h2> */}
  <section id="cta" className="ctaContainer">

      
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
            <SwiperSlide><img src={images.ainsiderToolsNew} className="app_header-img" alt="profile_bg" /></SwiperSlide>
            <SwiperSlide><img src={images.insdr} className="app_header-img" alt="profile_bg" /></SwiperSlide>
            <SwiperSlide><img src={images.aiwareCloud} className="app_header-img" alt="profile_bg" /></SwiperSlide>
            <SwiperSlide><img src={images.volton_slider} className="app_header-img" alt="profile_bg" /></SwiperSlide>
            <SwiperSlide><img src={images.offerpdf} className="app_header-img" alt="profile_bg" /></SwiperSlide>
            <SwiperSlide><img src={images.bakaliovelove} className="app_header-img" alt="profile_bg" /></SwiperSlide>
            <SwiperSlide><img src={images.afterrave} className="app_header-img" alt="profile_bg" /></SwiperSlide>
            <SwiperSlide><img src={images.uichatbot} className="app_header-img" alt="profile_bg" /></SwiperSlide>
            <SwiperSlide><img src={images.nftlanding} className="app_header-img" alt="profile_bg" /></SwiperSlide>
            <SwiperSlide><img src={images.ainsiderNewsletter} className="app_header-img" alt="profile_bg" /></SwiperSlide>
            <SwiperSlide><img src={images.pgr} className="app_header-img" alt="profile_bg" /></SwiperSlide>

            {/* <SwiperSlide><a href="https://huggingface.co/chat/assistants?user=Piotr-Macai" target="_blank" rel="noreferrer"><img src={images.hfassistants} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>  */}
            {/* <SwiperSlide><a href="https://tools.ainsider.tech" target="_blank" rel="noreferrer"><img src={images.imgpromptr} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>            <SwiperSlide><a href="https://szkolajazdymachowski.pl" target="_blank" rel="noreferrer"><img src={images.szkolajazdychatbot_slider} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}
            {/* <SwiperSlide><a href="https://insdr.digital" target="_blank" rel="noreferrer"><img src={images.ainsidertoolsbot} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}
            {/* <SwiperSlide><a href="https://https://ainsider.beehiiv.com/" target="_blank" rel="noreferrer"><img src={images.beehiv} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}
           
          </Swiper>
        </div>

        <div className="slider_headers">
        {/* <a href="/projects">
                    <button className="consBtn">SEE ALL MY PROJECTS</button>
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
export default AppWrap(MotionWrap(SliderWebClean, 'app__slider'), 'slider', 'app__whitebg');
