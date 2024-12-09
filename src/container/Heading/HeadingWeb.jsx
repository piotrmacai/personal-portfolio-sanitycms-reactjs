import React from 'react';
import './Heading.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import { BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs';
import { FaFacebook, FaBehance } from 'react-icons/fa';

const HeadingWeb = () => {
    const { t } = useTranslation();

    return (
        <section id="cta" className="ctaContainer">

            <div className="heading_mainsection">

                <div className="heading_section_1">                          
                    <h2 data-aos="zoom-in" className="cta_section_info_h2">
                    {t('cta_title1')}
                    </h2>                    
                    <p className="cta_section_info_p"> {t('cta_subtitle1')}</p>         
                </div>
    
                <div className="heading_section_2">

                        <p className="cta_section_info_basicp">{t('cta_desc1')}</p>
                        <a href="https://ainsider.beehiiv.com/" target="_blank" rel="noreferrer">
                            <button className="newsBtn">{t('cta_newsletter')}</button>
                        </a>
                </div>

            </div>

            
        </section>
    );
};

export default AppWrap(MotionWrap(HeadingWeb, 'app__headingweb'), 'headingweb', 'app__whitebg');
