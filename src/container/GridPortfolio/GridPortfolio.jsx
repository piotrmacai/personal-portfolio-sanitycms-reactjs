import React from 'react';
import './GridPortfolio.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import { FaBehance } from 'react-icons/fa';

const GridPortfolio = () => {
  const { t } = useTranslation();
  

  const imageVariants = {
    hover: { scale: 1.1 },
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  const gridItemTexts = [
    'AI & Automations',
    'Design',
    'Github',
    'AI',
    'My Portfolio',
    'Visuals'
  ];

  const gridItems = [
    { src: images.mobileaiware, className: 'large', link: 'https://insdr.cloud' },
    { src: images.behanceBanner, className: 'medium', link: 'https://www.behance.net/macaistudio/' }, 
    { src: images.git, className: 'medium', link: 'https://github.com/piotrmacai' },
    { type: 'info', link: null },
    { src: images.deviceHead4, className: 'small imghead', link: '/web' },
    { src: images.artstationBanner, className: 'small', link: 'https://www.artstation.com/piotrmacai' },
  ];

  return (
    <section id="cta" className="app__animated-about">
      <motion.div
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ duration: 0.8 }}
        className="image-grid-container"
      >
        {gridItems.map((item, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.5 }}
            className={`grid-item ${item.className || ''}`}
          >
            {item.type === 'info' ? (
              <div className="gridcta_section_info">
                <p className="gridcta_section_info_p">{t('grid_subtitle1')}</p>
                <h2 className="gridcta_section_info_h2">{t('grid_title1')}</h2>
                <div className="gridcta_social">
                  {/* <a href="https://twitter.com/piotrmacai" target="_blank" rel="noreferrer">
                    <div>
                      <BsTwitter />
                    </div>
                  </a> */}
                  {/* <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank" rel="noreferrer">
                    <div>
                      <BsLinkedin />
                    </div>
                  </a> */}
                  <a href="https://github.com/piotrmacai/" target="_blank" rel="noopener noreferrer">
                    <div>
                      <BsGithub />
                    </div>
                  </a>
                  <a href="https://www.behance.net/macaistudio/" target="_blank" rel="noopener noreferrer">
                    <div>
                      <FaBehance />
                    </div>
                  </a>
                  <a href="https://www.artstation.com/piotrmacai" target="_blank" rel="noopener noreferrer">         
                           <div> <img src={images.artstation} width={32} height={32} alt="Huggingface"/>   
                        </div>                                
                    </a>
                  <a href="https://www.deviantart.com/piotrmacai" target="_blank" rel="noopener noreferrer">         
                      <div> 
                             <img src={images.deviantartsvg} width={22} height={22} alt="Huggingface" style={{ filter: 'invert(100%)' }} />   
                      </div>                               
                  </a>  
              

                </div>
                <a href="/projects" target="_blank" rel="noreferrer">
                  <button className="newsBtn">{t('cta_portfolio')}</button>
                </a>
              </div>
            ) : (
              <a href={item.link || '#'} target={item.link ? '_blank' : '_self'} rel="noreferrer">
                <div className="image-hover-wrapper">
                  <img src={item.src} alt={`grid-item-${index}`} />
                  <div className="image-hover-overlay">
                    <span className="image-hover-text">{gridItemTexts[index]}</span>
                  </div>
                </div>
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(MotionWrap(GridPortfolio, 'app__cta'), 'cta', 'app__whitebg');


// import React from 'react';
// import './AnimatedAbout.scss';
// import { AppWrap, MotionWrap } from '../../wrapper';
// import { useTranslation } from 'react-i18next';
// import { images } from '../../constants';
// import { motion } from 'framer-motion';
// import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
// import { FaBehance } from 'react-icons/fa';

// const Cta = () => {
//   const { t } = useTranslation();

//   const imageVariants = {
//     hover: { scale: 1.1 },
//     initial: { opacity: 0, scale: 0.8 },
//     animate: { opacity: 1, scale: 1 },
//   };

//   const gridItems = [
//     { src: images.YtImg2, className: 'large', link: 'https://youtube.com' },
//     { src: images.computerHead, className: 'small', link: 'https://example.com/computer' },
//     { src: images.deviceHeadTr, className: 'medium', link: 'https://example.com/device' },
//     { type: 'info', link: null },
//     { src: images.deviceHead, className: 'medium', link: 'https://example.com/device2' },
//     { src: images.videoHead, className: 'medium', link: 'https://example.com/video' },
//   ];

//   return (
//     <section id="cta" className="app__animated-about">
//       <motion.div
//         whileInView={{ opacity: [0, 1], y: [50, 0] }}
//         transition={{ duration: 0.8 }}
//         className="image-grid-container"
//       >
//         {gridItems.map((item, index) => (
//           <motion.div
//             key={index}
//             variants={imageVariants}
//             initial="initial"
//             animate="animate"
//             whileHover="hover"
//             transition={{ duration: 0.5 }}
//             className={`grid-item ${item.className || ''}`}
//           >
//             {item.type === 'info' ? (
//               <div className="gridcta_section_info">
//                 <p className="gridcta_section_info_p">{t('grid_subtitle1')}</p>
//                 <h2 className="gridcta_section_info_h2">{t('grid_title1')}</h2>
//                 <div className="gridcta_social">
//                   <a href="https://twitter.com/piotrmacai" target="_blank" rel="noreferrer">
//                     <div>
//                       <BsTwitter />
//                     </div>
//                   </a>
//                   <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank" rel="noreferrer">
//                     <div>
//                       <BsLinkedin />
//                     </div>
//                   </a>
//                   <a href="https://www.behance.net/macaistudio/" target="_blank" rel="noopener noreferrer">
//                     <div>
//                       <FaBehance />
//                     </div>
//                   </a>
//                   <a href="https://github.com/piotrmacai/" target="_blank" rel="noopener noreferrer">
//                     <div>
//                       <BsGithub />
//                     </div>
//                   </a>
//                 </div>
//                 <a href="/contact" target="_blank" rel="noreferrer">
//                   <button className="newsBtn">{t('cta_talk')}</button>
//                 </a>
//               </div>
//             ) : (
//               <a href={item.link || '#'} target={item.link ? '_blank' : '_self'} rel="noreferrer">
//                 <img src={item.src} alt={`grid-item-${index}`} />
//               </a>
//             )}
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default AppWrap(MotionWrap(Cta, 'app__cta'), 'cta', 'app__whitebg');
