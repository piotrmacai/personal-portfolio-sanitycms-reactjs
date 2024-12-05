
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
        
       
        {/* Main Portfolio Item with Submenu */}
        <li className="app__flex p-text portfolio-menu">
          <Link to="#">{t('menu_solutions')}</Link>
          <ul className="portfolio-submenu">
            <li><Link to="/web">Web & Apps</Link></li>
            <li><Link to="/design">Design & Visuals</Link></li>
            <li><Link to="/ai-agents">{t('menu_chatbots')}</Link></li>
            <li><Link to="/ai">{t('menu_guides')}</Link></li>      
          </ul>
        </li>
         <li className="app__flex p-text">
        <Link to="/projects">Portfolio</Link> 
        </li> 
        <li className="app__flex p-text">
          <Link to="/contact">{t('menu4')}</Link> 
        </li>
        
        {/* <li className="app__flex p-text">
          <Link to="https://ainsider.tools/" target="_blank" rel="noopener noreferrer">Ainsider</Link>
        </li> */}
        
        <li className="button app__flex p-text">
          <Link to="https://ainsider.beehiiv.com/" target="_blank" rel="noopener noreferrer">AI Newsletter</Link> 
        </li>
        
        <li className="app__flex p-text">
          <LanguageSwitcher />
        </li>
      </ul>

      <div className="app__navbar-menu">
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
              </li>
              <li className="app__flex p-text">
                <Link to="/projects" onClick={() => setToggle(false)}>Portfolio</Link>
              </li>
              {/* <li className="button app__flex p-text">
                <Link to="https://ainsider.tools/magazine" target="_blank" rel="noopener noreferrer">Blog</Link> 
              </li> */}
              
              <li className="app__flex p-text"><Link to="/web">Web & Apps</Link></li>
              <li className="app__flex p-text"><Link to="/design">Design & Visuals</Link></li> 
               <li className="app__flex p-text"><Link to="/ai-agents">{t('menu_chatbots')}</Link></li>
              <li className="app__flex p-text"><Link to="/ai">{t('menu_guides')}</Link></li>    
              {/* <li className="app__flex p-text"><Link to="/genai">{t('menu_ai')}</Link></li>   */}

              <li className="app__flex p-text">
                <Link to="/contact" onClick={() => setToggle(false)}>{t('menu4')}</Link>
              </li>
              <li className="button app__flex p-text">
                <Link to="https://ainsider.beehiiv.com/" target="_blank" rel="noopener noreferrer">AI Newsletter</Link> 
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



// import React, { useState } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { images } from '../../constants';
// import './Navbar.scss';
// import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
// import { useTranslation } from "react-i18next";

// const Navbar = () => {
//   const { t } = useTranslation();
//   const [toggle, setToggle] = useState(false);
//   const [portfolioHover, setPortfolioHover] = useState(false);


//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={images.macailogo} alt="logo" />
//       </div>

//       <ul className="app__navbar-links">
//           <li className="app__flex p-text">
//             <Link to="/">{t('menu1')}</Link> 
//           </li> 
//           <li className="app__flex p-text">
//             <Link to="/projects">Portfolio</Link>
//             </li>

//         <li 
//           className="app__flex p-text app__navbar-portfolio"
//           onMouseEnter={() => setPortfolioHover(true)}
//           onMouseLeave={() => setPortfolioHover(false)}
//         >
//           <Link to="/projects">Portfolio</Link>
//           {portfolioHover && (
//             <ul className="app__navbar-submenu">
//               <li>
//                 <Link to="/projects/design">Design Projects</Link>
//               </li>
//               <li>
//                 <Link to="/projects/development">Development Projects</Link>
//               </li>
//               <li>
//                 <Link to="/projects/marketing">Marketing Campaigns</Link>
//               </li>
//             </ul>
//           )}
//         </li>

//           <li className="app__flex p-text">
//             <Link to="/contact">{t('menu4')}</Link> 
//           </li>
       
//             <li className="app__flex p-text">
//               <Link to="https://ainsider.tools/" target="_blank" rel="noopener noreferrer">Ainsider</Link>
          
//             </li>
//           <li className="button app__flex p-text">
//             <Link to="https://ainsider.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer">Newsletter</Link> 
//           </li>
//           <li className="app__flex p-text">
//           <LanguageSwitcher />
//           </li>
//       </ul>


//       <div className="app__navbar-menu" >
//         <HiMenuAlt4 onClick={() => setToggle(true)} />

//         {toggle && (
//           <motion.div
//             whileInView={{ x: [200, 0] }}
//             transition={{ duration: 0.85, ease: 'easeOut' }}
//           >
//             <HiX onClick={() => setToggle(false)} />
//           <ul className="app__navbar-links">
//             <li className="app__flex p-text">
//               <a href="/" onClick={() => setToggle(false)}>{t('menu1')}</a>
//             </li >
//             <li className="app__flex p-text">
//               <Link to="/projects" onClick={() => setToggle(false)}>Portfolio</Link>
//             </li>  

//                  <li className="button app__flex p-text">
//             <Link to="https://ainsider.tools/magazine" target="_blank" rel="noopener noreferrer">Blog</Link> 
//             </li>
//             <li className="app__flex p-text">
//               <Link to="/contact" onClick={() => setToggle(false)}>{t('menu4')}</Link>
//             </li>
        
       
//             <li className="button app__flex p-text">
//             <Link to="https://ainsider.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer">Newsletter</Link> 
//             </li>
            
//       </ul>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;