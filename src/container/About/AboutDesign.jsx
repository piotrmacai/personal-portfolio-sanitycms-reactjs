import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';
import { useTranslation } from "react-i18next";


const AboutDesign = () => {
  const { t } = useTranslation();
  const abouts = [
  { title: t('aboutDesign_CardTitle2'), description: t('aboutDesign_CardDesc2'), imgUrl: images.service2 },
  { title: t('aboutDesign_CardTitle4'), description: t('aboutDesign_CardDesc4'), imgUrl: images.service4 },
  { title: t('aboutDesign_CardTitle3'), description: t('aboutDesign_CardDesc3'), imgUrl: images.service3 },  
  { title: t('aboutDesign_CardTitle1'), description: t('aboutDesign_CardDesc1'), imgUrl: images.service1 },
  { title: t('aboutDesign_CardTitle5'), description: t('aboutDesign_CardDesc5'), imgUrl: images.service5 },
  { title: t('aboutDesign_CardTitle6'), description: t('aboutDesign_CardDesc6'), imgUrl: images.service6 },
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
  MotionWrap(AboutDesign, 'app__about'),
  'about',
  'app__whitebg'
);
