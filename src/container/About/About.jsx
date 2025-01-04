import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'; // Import Link


const About = () => {
  const { t } = useTranslation();
  const abouts = [  
  { title: t('about_CardTitle3'), description: t('about_CardDesc3'), imgUrl: images.service3, link: "/ai-agents" },  

  { title: t('about_CardTitle4'), description: t('about_CardDesc4'), imgUrl: images.service4, link: "/ai-agents" },
  { title: t('about_CardTitle2'), description: t('about_CardDesc2'), imgUrl: images.service2, link: "/ai" },

  { title: t('about_CardTitle5'), description: t('about_CardDesc5'), imgUrl: images.service5, link: "/web" },

  
  { title: t('about_CardTitle1'), description: t('about_CardDesc1'), imgUrl: images.service1, link: "/design" },

  
   { title: t('about_CardTitle6'), description: t('about_CardDesc6'), imgUrl: images.service6, link: "/ai" },
];


  return (
    <>
      {/* <h2 className="head-text"><span>{t('about_title')}</span></h2> */}
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
          <Link to={about.link} key={index} className="no-decoration">
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop:20}}>{about.description}</p>
           </Link>  
           </motion.div>
           
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
