import React from 'react';
import { motion } from 'framer-motion';
import './ContactPage.scss';
import {Pricing} from '../../container';
import {Footer} from '../../container';
import { images } from '../../constants';
import Chatbot from '../Chatbot/Chatbot'
import { useTranslation } from "react-i18next";


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

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
    <div className="contactpage_main_container">

        {/* // HEADER */}
    <div className="app__header app__flex contactpage_hero" >
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge contactpage_header_container">
            <div className="badge-cmp app__flex">
              <div>
                <p className="p-text">{t('contact_headerSmallTitle')}</p>
                <h1 className="head-text">{t('contact_headerTitle')}</h1>
              </div>
            </div>

            <div className="contactpagetag tag-cmp app__flex">
              <p className="p-text">{t('contact_SmallP1')}</p>
              <p className="p-text">{t('contact_SmallP2')}</p>
            </div>
      </div>

              <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">
                        {[images.dapp, images.social, images.mobil].map((circle, index) => (
                          <div className="circle-cmp app__flex" key={`circle-${index}`}>
                            <img src={circle} alt="profile_bg" />
                          </div>
                        ))}
               </motion.div>
    </motion.div>

    <div className="contactpage_chatContainer">
      <h4>{t('talkwithgpt')}</h4>
          <Chatbot/>
    </div>

  </div>
 
  {/* OTHER COMPONENTS*/}
  <Pricing/>
  <Footer/>

 </div>
</>
  )
}

export default Contact
