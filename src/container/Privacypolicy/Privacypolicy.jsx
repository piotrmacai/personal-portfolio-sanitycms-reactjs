import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
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


const Privacypolicy = () => {
  const { t } = useTranslation();
  return (
    <>
  <div className="app__header app__flex">
   
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div>
            <h2 className="head-text">{t('privacy.head')}</h2>
            <p className="cta_section_info_p" style={{marginTop:"20px"}}>{t('privacy.head1')}</p>
            <p className="p-text"> {t('privacy.desc1')}</p>
            <p className="cta_section_info_p" style={{marginTop:"20px"}}>{t('privacy.head2')}</p>
            <p className="p-text"> {t('privacy.desc2')}</p>
            <p className="cta_section_info_p" style={{marginTop:"20px"}}>{t('privacy.head3')}</p>
            <p className="p-text"> {t('privacy.desc3')}</p>
            <p className="cta_section_info_p" style={{marginTop:"20px"}}>{t('privacy.head4')}</p>
            <p className="p-text"> {t('privacy.desc4')}</p>
            <p className="cta_section_info_p" style={{marginTop:"20px"}}>{t('privacy.head5')}</p>
            <p className="p-text"> {t('privacy.desc5')}</p>
            <p className="cta_section_info_p" style={{marginTop:"20px"}}>{t('privacy.head6')}</p>
            <p className="p-text"> {t('privacy.desc6')}</p>
       
            <h2 className="head-text" style={{marginTop:"40px"}}>{t('privacy.headcook')}</h2>
            <p className="cta_section_info_p" style={{marginTop:"20px"}}>{t('privacy.headcook1')}</p>
            <p className="p-text"> {t('privacy.cook1')}</p>
            <p className="cta_section_info_p" style={{marginTop:"20px"}}>{t('privacy.headcook2')}</p>
            <p className="p-text"> {t('privacy.cook2')}</p>
            <p className="cta_section_info_p" style={{marginTop:"20px"}}>{t('privacy.headcook3')}</p>
            <p className="p-text"> {t('privacy.cook3')}</p>
            <p className="cta_section_info_p" style={{marginTop:"20px"}}>{t('privacy.headcook4')}</p>
            <p className="p-text"> {t('privacy.cook4')}</p>
            <p className="cta_section_info_p" style={{marginTop:"20px"}}>{t('privacy.headcook5')}</p>
            <p className="p-text"> {t('privacy.cook5')}</p>
            <p className="cta_section_info_p" style={{marginTop:"20px"}}>{t('privacy.headcook6')}</p>
            <p className="p-text"> {t('privacy.cook6')}</p>
            <p className="p-text"> {t('privacy.cook7')}</p>
          </div>
        </div>

    
      </div>
 

   
    <Chatbot/>
  </div>
  </>
  )
};

export default AppWrap(Privacypolicy, 'home');

