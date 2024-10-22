import React from 'react';
import './Team.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { MdOutlineDesignServices } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import { BiCodeBlock } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

const Team = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="aboutContainer">
            <div className="about_info">
                <h2 data-aos="zoom-in" className="teamTitle">
                    {t('team_title')}
                </h2>
                <p className="about_subtitle">{t('team_desc')} </p>
            </div>

            <div className="about__content" data-aos="zoom-in">
                
                <div className="about__cards">
                    <article className="about__card">
                        <MdOutlineDesignServices className="about__icon" />
                        <h5>{t('team_CardTitle1')} </h5>
                        <small> {t('team_CardDesc1')} </small>
                    </article>

                    <article className="about__card">
                        <FaAward className="about__icon" />
                        <h5>{t('team_CardTitle2')} </h5>
                        <small> {t('team_CardDesc2')} </small>
                    </article>

                    <article className="about__card">
                        <BiCodeBlock className="about__icon" />
                        <h5>{t('team_CardTitle3')} </h5>
                        <small> {t('team_CardDesc3')} </small>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default AppWrap(MotionWrap(Team, 'app__team'), 'team', 'app__whitebg');
