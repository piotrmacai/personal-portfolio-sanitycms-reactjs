import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
import {Chatbot} from '../../components'
import { useTranslation} from "react-i18next";

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
            <p className="p-text">{t('mainwelcome')}</p>
            <h1 className="head-text">{t('mainintro')}</h1>
          </div>
        </div>

        {/* <div className="tag-cmp app__flex">
          <p className="p-text">{t('main_heroP')}</p>
          <p className="p-text">{t('main_heroP2')}</p>
        </div> */}
        
        <a href="https://ainsider.beehiiv.com/subscribe" target="_blank" rel="noreferrer">
        <button className="newsletterBtn">JOIN TO MY NEWSLETTER</button>
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
    <Chatbot/>
  </div>
  </>
  )
};

export default AppWrap(Header, 'home');

