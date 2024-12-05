import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './socialmedia.scss';
import { Header, WebWork, Footer, AgentTabs, WebCta, Pricing, GridPortfolio, FeaturesTab, SliderWeb, AboutWeb } from '../../container';
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

const Web = () => {
  const { t } = useTranslation();
  return (
    <>
 
    <div  className="ai_chatContainer">
        <Chatbot/>
     </div>

  <Header /> 
  <SliderWeb/> 
  <AboutWeb/>
<WebCta/>
{/* <WebWork/> */}
<FeaturesTab/> 
<GridPortfolio/>
<Pricing/>
<Footer/>

  </>
  )
};

// export default AppWrap(Portfolio, 'portfolio');
export default Web;