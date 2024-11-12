import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './socialmedia.scss';
import { Work, Footer, ResourcesTabs, WebCta, Pricing } from '../../container';
import Chatbot from '../Chatbot/Chatbot'
import { useTranslation } from "react-i18next";
import { BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs';
import { FaFacebook, FaBehance } from 'react-icons/fa';

const scaleVariants = {
  whileInView: {
    scale:[0,1],
    opacity:[0,1],
    transition: {
      duration:1,
      ease: 'easeInOut',
    },
  },
};

// 

const Resources = () => {
  const { t } = useTranslation();
  return (
    <>
  <div className="portfolio_app__header app__flex">
  <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div>
            <p className="p-text">{t('mainwelcome')}</p>
            <h1 className="head-text">{t('resourcestabs_header')}</h1>
          </div>
        </div>

        <div className="cta_social">
                           
                           <a href="https://twitter.com/piotrmacai" target="_blank" rel="noreferrer">
                               <div> <BsTwitter /> </div>
                           </a>
                      
                       <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank" rel="noreferrer">
                            <div> <BsLinkedin />     </div>
                       </a>
                  
                       <a href="https://www.behance.net/macaistudio/" target="_blank" rel="noopener noreferrer">         
                           <div> <FaBehance/>    </div>                               
                        </a>   
                        <a href="https://www.artstation.com/piotrmacai" target="_blank" rel="noopener noreferrer">         
                           <div> <img src={images.artstation} width={32} height={32} alt="Huggingface"/>    </div>                               
                        </a>    
                        <a href="https://github.com/piotrmacai/" target="_blank" rel="noopener noreferrer">
                           <div>< BsGithub /></div>
                       </a>
                        <a href="https://huggingface.co/Piotr-Macai" target="_blank" rel="noopener noreferrer">         
                           <div> <img src={images.hflogo} width={32} height={32} alt="Huggingface"/>    </div>                               
                        </a>     
               </div>
        {/* <div className="tag-cmp app__flex">
          <p className="p-text">{t('main_heroP')}</p>
          <p className="p-text">{t('main_heroP2')}</p>
        </div> */}
        <a href="https://ainsider.beehiiv.com/subscribe" target="_blank" rel="noreferrer">
        <button className="newsletterBtn">{t('cta_talk')}</button>
        </a>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.macaibg2} className="app_header-img" alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.openai, images.hflogo, images.toolicon].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
    <div  className="ai_chatContainer">
        <Chatbot/>
     </div>
  </div>
<ResourcesTabs/>
<Pricing/>
<Footer/>

  </>
  )
};

export default AppWrap(Resources, 'resources');
// export default Resources;