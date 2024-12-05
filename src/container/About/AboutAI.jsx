import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';
import { useTranslation } from "react-i18next";


const AboutAI = () => {
  const { t } = useTranslation();
  const abouts = [
  { title: t('aboutAI_CardTitle2'), description: t('aboutAI_CardDesc2'), imgUrl: images.service2 },
  { title: t('aboutAI_CardTitle4'), description: t('aboutAI_CardDesc4'), imgUrl: images.service4 },
  { title: t('aboutAI_CardTitle3'), description: t('aboutAI_CardDesc3'), imgUrl: images.service3 },  
  { title: t('aboutAI_CardTitle1'), description: t('aboutAI_CardDesc1'), imgUrl: images.service1 },
  { title: t('aboutAI_CardTitle5'), description: t('aboutAI_CardDesc5'), imgUrl: images.service5 },
  { title: t('aboutAI_CardTitle6'), description: t('aboutAI_CardDesc6'), imgUrl: images.service6 },
];


  return (
    <>
      <h2 className="head-text"><span>{t('about_title')}</span></h2>
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
  MotionWrap(AboutAI, 'app__about'),
  'about',
  'app__whitebg'
);
