import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Portfolio.scss';
import './socialmedia.scss';
import { Header, Work, Footer } from '../../container';
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

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
 
  <Header /> 
 <div  className="ai_chatContainer">
        <h4>{t('talkwithgpt')}</h4>
        <Chatbot/>
     </div>
<Work/>
<Footer/>

  </>
  )
};

// export default AppWrap(Portfolio, 'portfolio');
export default Projects;