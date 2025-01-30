import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './socialmedia.scss';
import { HeaderDesign, DesignWork, Footer, AgentTabs, DesignCta, Pricing, FeaturesTab, GridPortfolio, GridPortfolioDesign, GridPortfolioDesignSecond, SliderDesign, SliderVisuals, AboutDesign } from '../../container';
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

// 

const Design = () => {
  const { t } = useTranslation();
  return (
    <>
  
  <HeaderDesign /> 
  <SliderVisuals/>
  <GridPortfolio/>
  <AboutDesign/>

  <DesignCta/> 
  <FeaturesTab/>   

<GridPortfolioDesign/>
{/* < GridPortfolioDesignSecond/> */}
<Pricing/>
<Footer/>
<Chatbot/>

  </>
  )
};

// export default AppWrap(Portfolio, 'portfolio');
export default Design;