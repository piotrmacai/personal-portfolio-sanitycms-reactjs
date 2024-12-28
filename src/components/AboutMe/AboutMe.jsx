import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './socialmedia.scss';
import { Header, WebWork, Footer, ResourcesTabs, Cta, Pricing, GridPortfolio, FeaturesTab, Slider, SliderWebClean, AboutWeb } from '../../container';
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


const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <>
 <Header /> 
 <Slider/>   
 <Cta/> 
 <div className="hide-on-mobile">
        <ResourcesTabs/>
</div>    
<GridPortfolio/>
<Pricing/>
<Footer/>

  </>
  )
};

// export default AppWrap(Portfolio, 'portfolio');
export default AboutMe;