import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';
import { useTranslation } from "react-i18next";


const AboutWeb = () => {
  const { t } = useTranslation();
  const abouts = [
  { title: t('aboutWeb_CardTitle2'), description: t('aboutWeb_CardDesc2'), imgUrl: images.service2 },
  { title: t('aboutWeb_CardTitle4'), description: t('aboutWeb_CardDesc4'), imgUrl: images.service4 },
  { title: t('aboutWeb_CardTitle3'), description: t('aboutWeb_CardDesc3'), imgUrl: images.service3 },  
  { title: t('aboutWeb_CardTitle1'), description: t('aboutWeb_CardDesc1'), imgUrl: images.service1 },
  { title: t('aboutWeb_CardTitle5'), description: t('aboutWeb_CardDesc5'), imgUrl: images.service5 },
  { title: t('aboutWeb_CardTitle6'), description: t('aboutWeb_CardDesc6'), imgUrl: images.service6 },
];


  return (
    <>
      <h2 className="about-head-text"><span>{t('about_title')}</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          // <div key={index} className="about-item">
          <motion.div
                whileInView={{ opacity:1}}
                whileHover={{scale:1.1}}
                transition={{duration:0.5, type: 'tween'}}
                className="app__profile-item"
                key={index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop:20}}>{about.description}</p>
            </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(AboutWeb, 'app__about'),
  'about',
  'app__whitebg'
);
