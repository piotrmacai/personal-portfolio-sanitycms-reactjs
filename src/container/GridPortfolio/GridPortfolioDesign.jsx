import React from 'react';
import './GridPortfolioDesign.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import { FaBehance } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GridPortfolio = () => {
  const { t } = useTranslation();
  

  const imageVariants = {
    hover: { scale: 1.1 },
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  const gridItemTexts = [
    'Video',
    'Web',
    'AI',
    'AI',
    'Design &/UX/UI',
    'AI Resources'
  ];

  const gridItems = [
    { src: images.nikead, className: 'small', link: 'https://www.behance.net/macaistudio/' },
    { src: images.statue, className: 'medium', link: 'https://vimeo.com/1039849145' },
    { src: images.bottlephoto, className: 'small', link: 'https://ainsider.tools' },
    { src: images.cosmic, className: 'medium', link: 'https://www.skinprojectclinic.pl/' },
    { src: images.myartstation, className: 'medium', link: 'https://www.behance.net/macaistudio/' },
    { src: images.macaistudiobanner, className: 'large', link: 'https://paintball-osada.pl/' },
    { src: images.bakaliovelove, className: 'medium', link: 'https://bakaliowelove.pl/' },
    { src: images.gptbanner, className: 'large', link: 'https://insdr.cloud' },
    // { src: images.nftlanding, className: 'medium', link: '/design' },
    { src: images.volton_slider, className: 'medium', link: 'https://voltoninstall.pl/' },
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
                  <a href="https://twitter.com/piotrmacai" target="_blank" rel="noreferrer">
                    <div>
                      <BsTwitter />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank" rel="noreferrer">
                    <div>
                      <BsLinkedin />
                    </div>
                  </a>
                  <a href="https://www.behance.net/macaistudio/" target="_blank" rel="noopener noreferrer">
                    <div>
                      <FaBehance />
                    </div>
                  </a>
                  <a href="https://github.com/piotrmacai/" target="_blank" rel="noopener noreferrer">
                    <div>
                      <BsGithub />
                    </div>
                  </a>
                </div>
                {/* <a href="/contact">
                  <button className="newsBtn">{t('cta_talk')}</button>
                </a> */}
                <Link to="/contact">
                  <button className="newsBtn">{t('cta_talk')}</button>
                </Link>
              </div>
            ) : (
              <a href={item.link || '#'} target={item.link ? '_blank' : '_self'} rel="noreferrer">
                <div className="image-hover-wrapper">
                  <img src={item.src} alt={`grid-item-${index}`} />
                  <div className="image-hover-overlay">
                    {/* <span className="image-hover-text">{gridItemTexts[index]}</span> */}
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