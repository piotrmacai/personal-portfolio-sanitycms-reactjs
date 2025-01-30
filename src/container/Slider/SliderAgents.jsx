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

const SliderAgents = () => {
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
                    {t('aicta_subtitle1')}
                    </h2>                    
                    {/* <p className="cta_section_info_p"> {t('designcta_subtitle1')}</p>          */}
                </div>

                <div className="heading_section_2">

                        <p className="cta_section_info_basicp">{t('aicta_desc1')}</p>
                        {/* <a href="/ai-agents">
                            <button className="newsBtn">{t('cta_details')}</button>
                        </a> */}
                        <Link to="/ai-agents">
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
              <SwiperSlide><a href="https://github.com/piotrmacai/agent-ollama-deepseek-localrag" target="_blank" rel="noreferrer"><img src={images.deepseekimg} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
              <SwiperSlide><a href="/projects" target="_blank" rel="noreferrer"><img src={images.mockupvoicebot} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
              <SwiperSlide><a href="https://macai.cloud" target="_blank" rel="noreferrer"><img src={images.voiceflowecom} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="/projects" target="_blank" rel="noreferrer"><img src={images.mwrapper} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="https://github.com/piotrmacai/agent-botpress-leadbot-v2" target="_blank" rel="noreferrer"><img src={images.mbotpress} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="https://github.com/piotrmacai/aiagent-voiceflow-leadbot" target="_blank" rel="noreferrer"><img src={images.mecom} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="https://github.com/piotrmacai/agent-flowise-ragtools-support-agent" target="_blank" rel="noreferrer"><img src={images.mmao} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="https://github.com/piotrmacai/agent-flowise-local-ollama-rag" target="_blank" rel="noreferrer"><img src={images.mollama} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
             <SwiperSlide><a href="https://huggingface.co/chat/assistants?user=Piotr-Macai" target="_blank" rel="noreferrer"><img src={images.hfassistants} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
             <SwiperSlide><a href="https://insdr.cloud" target="_blank" rel="noreferrer"><img src={images.insdr} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>

            <SwiperSlide><a href="https://ainsider.tools" target="_blank" rel="noreferrer"><img src={images.ainsidertoolsbot} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            {/* <SwiperSlide><a href="/projects" target="_blank" rel="noreferrer"><img src={images.imgpromptr} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="/projects"><img src={images.szkolajazdychatbot} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            <SwiperSlide><a href="/projects" target="_blank" rel="noreferrer"><img src={images.aiwarecloudchatbot} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>
            */}
            {/* <SwiperSlide><a href="https://huggingface.co/chat/assistants?user=Piotr-Macai" target="_blank" rel="noreferrer"><img src={images.hfassistants} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>  */}
            {/* <SwiperSlide><a href="https://tools.ainsider.tech" target="_blank" rel="noreferrer"><img src={images.imgpromptr} className="app_header-img" alt="profile_bg" /></a></SwiperSlide>            <SwiperSlide><a href="https://szkolajazdymachowski.pl" target="_blank" rel="noreferrer"><img src={images.szkolajazdychatbot_slider} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}
            {/* <SwiperSlide><a href="https://insdr.digital" target="_blank" rel="noreferrer"><img src={images.ainsidertoolsbot} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}
            {/* <SwiperSlide><a href="https://https://ainsider.beehiiv.com/" target="_blank" rel="noreferrer"><img src={images.beehiv} className="app_header-img" alt="profile_bg" /></a></SwiperSlide> */}
           
          </Swiper>
        </div>

        <div className="slider_headers">
                <a href="/ai" target="_blank" rel="noreferrer">
                        <button className="consBtn">{t('cta_more')}</button>
                 </a>
        </div>
          
   </div>
  </>
  )
};


// export default Slider
export default AppWrap(MotionWrap(SliderAgents, 'app__slider'), 'slider', 'app__whitebg');
