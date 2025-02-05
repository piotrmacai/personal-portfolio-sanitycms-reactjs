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

const SliderAgentsClean = () => {
  const { t } = useTranslation();
  return (
    <>
  <div className="sliderContainer">

        {/* <div className="slider_headers">
            <p className="slider_p">{t('portfolio_header_P')}</p>
            <h2 className="slider_h2">{t('portfolio_header_h')}</h2>
        </div> */}
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
                        <SwiperSlide><a href="/ai-agents" target="_blank" rel="noreferrer"><img src={images.resdeepseek} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="/ai-agents" target="_blank" rel="noreferrer"><img src={images.googleaijs} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
              <SwiperSlide><a href="/ai-agents" target="_blank" rel="noreferrer"><img src={images.deepseekimg} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
              <SwiperSlide><a href="/ai-agents" target="_blank" rel="noreferrer"><img src={images.googleaipython} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="/projects" target="_blank" rel="noreferrer"><img src={images.mockupvoicebot} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
         <SwiperSlide><a href="https://macai.cloud" target="_blank" rel="noreferrer"><img src={images.voiceflowecom} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="/ai-agents" target="_blank" rel="noreferrer"><img src={images.mwrapper} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="/ai-agents" target="_blank" rel="noreferrer"><img src={images.mbotpress} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="/ai-agents" target="_blank" rel="noreferrer"><img src={images.mecom} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="/ai-agents" target="_blank" rel="noreferrer"><img src={images.mmao} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="/ai-agents" target="_blank" rel="noreferrer"><img src={images.mollama} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
             <SwiperSlide><a href="/ai-agents" target="_blank" rel="noreferrer"><img src={images.hfassistants} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
             <SwiperSlide><a href="/ai-agents" target="_blank" rel="noreferrer"><img src={images.insdr} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
    <SwiperSlide><a href="https://ainsider.tools" target="_blank" rel="noreferrer"><img src={images.ainsidertoolsbot} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            {/* <SwiperSlide><a href="https://www.artstation.com/piotrmacai" target="_blank" rel="noreferrer"><img src={images.imgpromptr} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="/projects"><img src={images.szkolajazdychatbot} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="https://ainsider.tools" target="_blank" rel="noreferrer"><img src={images.aiwarecloudchatbot} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="https://ainsider.tools" target="_blank" rel="noreferrer"><img src={images.ainsiderpl} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}

            {/* <SwiperSlide><a href="https://huggingface.co/chat/assistants?user=Piotr-Macai" target="_blank" rel="noreferrer"><img src={images.hfassistants} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>  */}
            {/* <SwiperSlide><a href="https://tools.ainsider.tech" target="_blank" rel="noreferrer"><img src={images.imgpromptr} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>            <SwiperSlide><a href="https://szkolajazdymachowski.pl" target="_blank" rel="noreferrer"><img src={images.szkolajazdychatbot_slider} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}
            {/* <SwiperSlide><a href="https://insdr.digital" target="_blank" rel="noreferrer"><img src={images.ainsidertoolsbot} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}
            {/* <SwiperSlide><a href="https://https://ainsider.beehiiv.com/" target="_blank" rel="noreferrer"><img src={images.beehiv} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}
           
          </Swiper>
        </div>

        <div className="slider_headers">
        {/* <a href="/projects">
                    <button className="consBtn">My Portfolio</button>
               </a> */}
               <Link to="/projects">
                        <button className="newsletterBtn">{t('cta_portfolio')}</button>
                    </Link>
        </div>
          
   </div>
  </>
  )
};


// export default Slider
export default AppWrap(MotionWrap(SliderAgentsClean, 'app__slider'), 'slider', 'app__whitebg');
