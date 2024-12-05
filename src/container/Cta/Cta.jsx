import React from 'react';
import './Cta.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import { BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs';
import { FaFacebook, FaBehance } from 'react-icons/fa';

const Cta = () => {
    const { t } = useTranslation();

    return (
        <section id="cta" className="ctaContainer">

            <div className="cta_section1">

                <div className="cta_section_img">                          
                    <img src={images.cta1} className="app_header-img" alt="profile_bg" />
                </div>
    
                <div className="cta_section_info">
                    <p className="cta_section_info_p"> {t('cta_subtitle1')}</p>
                    <h2 data-aos="zoom-in" className="cta_section_info_h2">
                    {t('cta_title1')}
                    </h2>
                    <p className="cta_section_info_basicp">{t('cta_desc1')}</p>
                    <div className="cta_social" style={{ display: window.innerWidth <= 915 ? 'none' : 'flex' }}>
                           
                                <a href="https://twitter.com/piotrmacai" target="_blank" rel="noreferrer">
                                    <div> <BsTwitter /> </div>
                                </a>
                           
                            <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank" rel="noreferrer">
                                 <div> <BsLinkedin />     </div>
                            </a>
                             <a href="https://github.com/piotrmacai/" target="_blank" rel="noopener noreferrer">
                                <div>< BsGithub /></div>
                            </a>
                             {/* <a href="https://huggingface.co/Piotr-Macai" target="_blank" rel="noopener noreferrer">         
                                <div> <img src={images.hflogo} width={32} height={32} alt="Huggingface"/>    </div>                               
                             </a>     */}
                             <a href="https://www.behance.net/macaistudio/" target="_blank" rel="noopener noreferrer">         
                                <div> <FaBehance/>    </div>                               
                             </a>   
                             <a href="https://www.artstation.com/piotrmacai" target="_blank" rel="noopener noreferrer">         
                                <div> <img src={images.artstation} width={32} height={32} alt="Huggingface"/>    </div>                               
                             </a>
                             {/* <a href="https://www.deviantart.com/piotrmacai" target="_blank" rel="noopener noreferrer">         
                                <div> 
                                    <img src={images.deviantartsvg} width={22} height={22} alt="Huggingface" style={{ filter: 'invert(100%)' }} />   
                                </div>                               
                             </a>   */}

                    </div>

                        <a href="https://ainsider.beehiiv.com/" target="_blank" rel="noreferrer">
                            <button className="newsBtn">{t('cta_newsletter')}</button>
                        </a>

                </div>

            </div>

            
            {/* <div className="cta_section2">
    
                <div className="cta_section_info">
                    <p className="cta_section_info_p">{t('cta_subtitle2')} </p>
                    <h2 data-aos="zoom-in" className="cta_section_info_h2">
                    {t('cta_title2')}
                    </h2>
                    <p className="cta_section_info_basicp">{t('cta_desc2')}</p>
                    <a href="/contact">
                        <button className="consBtn">FREE CONSULTATION</button>
                    </a>
                </div>

                <div className="cta_section_img">   
                    <img src={images.cta2} className="app_header-img" alt="profile_bg" />
                </div>

            </div> */}
            
        </section>
    );
};

export default AppWrap(MotionWrap(Cta, 'app__cta'), 'cta', 'app__whitebg');

