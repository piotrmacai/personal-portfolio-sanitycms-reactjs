import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './socialmedia.scss';
import { HeaderAi, AiWork, Footer, AgentTabs, AboutAgents, AiCta, Pricing, FeaturesTab, ResourcesTabs, SliderAgentsClean, } from '../../container';
import Chatbot from '../Chatbot/Chatbot'
import { useTranslation } from "react-i18next";
import { BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs';
import { FaFacebook, FaBehance } from 'react-icons/fa';
import './Assistants.scss';

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

const Assistants = () => {
  const { t } = useTranslation();
  return (
    <>

<HeaderAi /> 
<AboutAgents/>
<AgentTabs/>

<AiCta/>
<FeaturesTab/> 
{/* <div className="hide-on-mobile">
  <ResourcesTabs/>
</div>  */}


{/* <AiWork/> */}


<Pricing/>
<Footer/>
<Chatbot/>

  </>
  )
};

// export default AppWrap(Portfolio, 'portfolio');
export default Assistants;