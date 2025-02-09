import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './HeaderDesign.scss';
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


const HeaderDesign = () => {
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
            <p className="cta_section_info_p">{t('designmainwelcome')}</p>
            <h1 className="head-text">{t('designmainintro')}</h1>
            <p className="p-text"> {t('designmaindesc')}</p>
          </div>
        </div>
{/* 
      <div className="tag-cmp app__flex">
          <p className="p-text hiddentext">{t('designmain_heroP2')}</p>
        </div> */}
        
        <div className="cta_social">
        <p className="p-text hiddentext">{t('designmain_heroP2')}</p>  
                        <a href="https://www.behance.net/macaistudio/" target="_blank" rel="noopener noreferrer">         
                           <div> <FaBehance/>    </div>                               
                        </a>  
                        <a href="https://www.artstation.com/piotrmacai" target="_blank" rel="noopener noreferrer">         
                           <div> <img src={images.artstation} width={32} height={32} alt="Huggingface"/>    </div>                               
                        </a>
                        <a href="https://www.deviantart.com/piotrmacai" target="_blank" rel="noopener noreferrer">         
                           <div> <img src={images.deviantlogo} width={32} height={32} alt="Huggingface"/>    </div>                               
                        </a>
                        <a href="https://www.instagram.com/piotr.macai" target="_blank" rel="noopener noreferrer">         
                           <div> <img src={images.insta} width={32} height={32} alt="Huggingface"/>    </div>                               
                        </a>
                           {/* <a href="https://twitter.com/piotrmacai" target="_blank" rel="noreferrer">
                               <div> <BsTwitter /> </div>
                           </a>
                      
                       <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank" rel="noreferrer">
                            <div> <BsLinkedin />     </div>
                       </a> */}

               </div>

        
        {/* <a href="/contact">
        <button className="newsletterBtn">{t('cta_consultation')}</button>
        </a> */}
       <Link to="/contact">
      <button className="newsletterBtn">{t('cta_consultation')}</button>
    </Link>
    
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
      <Link to="https://behance.net/macaistudio" target="_blank" rel="noopener noreferrer">
        <div className="circle-cmp app__flex">
          <img src={images.behanceicon} alt="behance icon" />
        </div>
      </Link>
      
      <Link to="https://www.deviantart.com/piotrmacai" target="_blank" rel="noopener noreferrer">
        <div className="circle-cmp app__flex">
          <img src={images.deviant} alt="deviant art icon" />
        </div>
      </Link>
      
      <Link to="https://www.artstation.com/piotrmacai" target="_blank" rel="noopener noreferrer">
        <div className="circle-cmp app__flex">
          <img src={images.artstationicon} alt="artstation icon" />
        </div>
      </Link>

    </motion.div>

    <Chatbot/>
  </div>
  </>
  )
};

export default AppWrap(HeaderDesign, 'home');