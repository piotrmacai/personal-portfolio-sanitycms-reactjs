import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './socialmedia.scss';
import { HeaderAi, Work, Footer, GenAiTabs, GithubCta, VideoCta, Pricing, GridPortfolio, ResourcesTabs, AboutAI, SliderAgents, FeaturesTab, AiCta } from '../../container';
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

const Video = () => {
  const { t } = useTranslation();
  return (
    <>
  
    <div  className="ai_chatContainer">
        <Chatbot/>
     </div>
 
<HeaderAi/>  
<AboutAI/>
<AiCta/>
<div className="hide-on-mobile">
  <ResourcesTabs/>
</div>
<GithubCta/>
<FeaturesTab/>   
{/* <GridPortfolio/> */}
{/* <VideoCta/> */}
<Pricing/>

<Footer/>
  </>
  )
};

// export default AppWrap(Portfolio, 'portfolio');
export default Video;