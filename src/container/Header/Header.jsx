import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
import {Chatbot} from '../../components'
import { useTranslation} from "react-i18next";
import { BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs';
import { FaFacebook, FaBehance } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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


const Header = () => {
  const { t } = useTranslation();
  return (
    <>
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div>
            <p className="cta_section_info_p">{t('mainwelcome')}</p>
            <h1 className="head-text">{t('mainintro')}</h1>
            <p className="p-text"> {t('maindesc')}</p>
          </div>
        </div>
{/* 
        <div className="tag-cmp app__flex">
          <p className="p-text">{t('main_portfolio')}</p>
        </div> */}
        <div className="cta_social hidedeskop">
        <p className="p-text">{t('main_portfolio')}</p>
       
                        
                  
                       <a href="https://www.behance.net/macaistudio/" target="_blank" rel="noopener noreferrer">         
                           <div> <FaBehance/>    </div>                               
                        </a>   
                        <a href="https://www.artstation.com/piotrmacai" target="_blank" rel="noopener noreferrer">         
                           <div> <img src={images.artstation} width={32} height={32} alt="Huggingface"/>    </div>                               
                        </a>
                              <a href="https://github.com/piotrmacai/" target="_blank" rel="noopener noreferrer">
                           <div>< BsGithub /></div>
                       </a>
                        <a href="https://twitter.com/piotrmacai" target="_blank" rel="noreferrer">
                               <div> <BsTwitter /> </div>
                           </a>
                      
                       <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank" rel="noreferrer">
                            <div> <BsLinkedin />     </div>
                       </a>
                        {/* <a href="https://www.deviantart.com/piotrmacai" target="_blank" rel="noopener noreferrer">         
                           <div> 
                             <img src={images.deviantartsvg} width={22} height={22} alt="Huggingface" style={{ filter: 'invert(100%)' }} />   
                           </div>                               
                        </a>     */}
                     
                        {/* <a href="https://huggingface.co/Piotr-Macai" target="_blank" rel="noopener noreferrer">         
                           <div> <img src={images.hflogo} width={32} height={32} alt="Huggingface"/>    </div>                               
                        </a>      */}

               </div>

        {/* <a href="/contact">
        <button className="newsletterBtn">{t('cta_consultation')}</button>
        </a> */}
           <div>
           <Link to="https://insdr.cloud" target="_blank">
          <button className="secondBtn">{t('cta_insdr')}</button>
        </Link>
        <Link to="/contact">
          <button className="newsletterBtn">{t('cta_consultation')}</button>
        </Link>
          
    </div>

    
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.macaicyberpunk} className="app_header-img" alt="profile_bg" />
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
      {[images.openai, images.behanceicon, images.hflogo].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
    <Chatbot/>
  </div>
  </>
  )
};

export default AppWrap(Header, 'home');

