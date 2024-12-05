import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './socialmedia.scss';
import { Header, Work, Footer, ResourcesTabs, WebCta, Pricing, GridPortfolio } from '../../container';
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

const Resources = () => {
  const { t } = useTranslation();
  return (
    <>

    <div  className="ai_chatContainer">
        <Chatbot/>
     </div>

<Header />  

<GridPortfolio/>
  <div className="hide-on-mobile">
    <ResourcesTabs/>
</div>
<Pricing/>
<Footer/>

  </>
  )
};

export default AppWrap(Resources, 'resources');
// export default Resources;