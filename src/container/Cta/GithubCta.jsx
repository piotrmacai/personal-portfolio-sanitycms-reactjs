import React from 'react';
import './Cta.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import { BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs';
import { FaFacebook, FaBehance } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GithubCta = () => {
    const { t } = useTranslation();

    return (
        <section id="cta" className="ctaContainer">

            <div className="cta_section1">

                <div className="githubcta_section_img">                          
                    <img src={images.git} alt="profile_bg" />
                </div>
    
                <div className="cta_section_info">
                    <p className="cta_section_info_p"> {t('githubcta_subtitle1')}</p>
                    <h2 data-aos="zoom-in" className="cta_section_info_h2">
                    {t('githubcta_title1')}
                    </h2>
                    <p className="cta_section_info_basicp">{t('githubcta_desc1')}</p>
                    <p className="cta_section_info_basicp" style={{ marginTop: '0.5rem' }}>{t('githubcta_desc2')}</p>         

                <a href="https://github.com/piotrmacai" target="_blank" rel="noopener noreferrer">
                  <p className="newsBtn">Github</p>
                </a>

                </div>

            </div>

            
            {/* <div className="cta_section2">
    
                <div className="cta_section_info">
                    <p className="cta_section_info_p">{t('aicta_subtitle2')} </p>
                    <h2 data-aos="zoom-in" className="cta_section_info_h2">
                    {t('aicta_title2')}
                    </h2>
                    <p className="cta_section_info_basicp">{t('aicta_desc2')}</p>
   \
                       <Link to="/contact">
                        <button className="newsBtn">{t('cta_consultation')}</button>
                    </Link>
                </div>

                <div className="cta_section_img">   
                    <img src={images.cta2} className="app_header-img" alt="profile_bg" />
                </div>

            </div> */}
            
        </section>
    );
};

export default AppWrap(MotionWrap(GithubCta, 'app__githubcta'), 'githubcta', 'app__whitebg');