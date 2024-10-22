import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import './Navbar.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.macailogo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
          <li className="app__flex p-text">
            <Link to="/">{t('menu1')}</Link> 
          </li> 
          <li className="app__flex p-text">
            <Link to="/projects">Portfolio</Link>
            </li>
          <li className="app__flex p-text">
            <Link to="/contact">{t('menu4')}</Link> 
          </li>
          {/* <li className="app__flex p-text">
            <Link to="https://library.aiware.tools/" target="_blank" rel="noopener noreferrer">AI Tools</Link> 
            </li>
            <li className="app__flex p-text">
            <Link to="https://prompts.aiware.tools/" target="_blank" rel="noopener noreferrer">AI Prompts</Link> 
            </li> */}
            <li className="app__flex p-text">
            <Link to="https://ainsider.tools/" target="_blank" rel="noopener noreferrer">Ainsider</Link> 
            </li>
          <li className="button app__flex p-text">
            <Link to="https://ainsider.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer">Newsletter</Link> 
          </li>
          <li className="app__flex p-text">
          <LanguageSwitcher />
          </li>
      </ul>


      <div className="app__navbar-menu" >
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
          <ul className="app__navbar-links">
            <li className="app__flex p-text">
              <a href="/" onClick={() => setToggle(false)}>{t('menu1')}</a>
            </li >
            <li className="app__flex p-text">
              <Link to="/projects" onClick={() => setToggle(false)}>Portfolio</Link>
            </li>  

                 <li className="button app__flex p-text">
            <Link to="https://ainsider.tools/magazine" target="_blank" rel="noopener noreferrer">Blog</Link> 
            </li>
            <li className="app__flex p-text">
              <Link to="/contact" onClick={() => setToggle(false)}>{t('menu4')}</Link>
            </li>
        
       
            <li className="button app__flex p-text">
            <Link to="https://ainsider.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer">Newsletter</Link> 
            </li>
            
      </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;