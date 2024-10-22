import React from 'react';
import './Publication.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { BiCodeBlock } from 'react-icons/bi';
import { BsFillChatLeftDotsFill, BsFillCollectionPlayFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const Publication = () => {
    const { t } = useTranslation();

    return (
        <section id="publ" className="publContainer">

                <div className="publ_headers">
                    <p className="publ_p">{t('publ_header_P')}</p>
                    <h2 className="publ_h2">{t('publ_header_h')}</h2>
                </div>

            <div className="publ__content" data-aos="zoom-in">
                
                <div className="publ__cards"> 
                
                 <a href="https://ainsider.tools/" target="_blank" rel="noopener noreferrer">
                    <article className="publ__card">
                        <BiCodeBlock className="publ__icon" />
                        <h5>{t('publ_CardTitle3')} </h5>
                        <small> {t('publ_CardDesc3')} </small>
                    </article>
                    </a>
                     <a href="https://aiware.cloud/" target="_blank" rel="noopener noreferrer">
                    <article className="publ__card">
                        <BsFillCollectionPlayFill className="publ__icon" />
                        <h5>{t('publ_CardTitle2')} </h5>
                        <small> {t('publ_CardDesc2')} </small>
                    </article>
                </a>
                <a href="https://macai.aiware.cloud" target="_blank" rel="noopener noreferrer">
                    <article className="publ__card">
                        <BsFillChatLeftDotsFill className="publ__icon" />
                        <h5>{t('publ_CardTitle1')} </h5>
                        <small> {t('publ_CardDesc1')} </small>
                    </article>
                </a>

               

              
                </div> 
            </div>
        </section>
    );
};

export default AppWrap(MotionWrap(Publication, 'app__publication'), 'publication', 'app__whitebg');
