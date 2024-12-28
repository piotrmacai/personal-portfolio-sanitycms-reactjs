import React from 'react';
import { useTranslation } from "react-i18next";
import { images } from '../../constants';
import './AgentTabs.scss';

export const AgentTabsData = () => {
  const { t } = useTranslation();
  
  return [
    {
      id: "1",
      label: "Huggingface",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>
          {t('agentsTab1Title')}</h2>
          <img src={images.hfassistantsapp} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
          {/* <p>{t('Overview content goes here, describing key features and functionality.')}</p> */}
          <ul>
            <li>{t('agentsTab1Desc1')}</li>
            <li>{t('agentsTab1Desc2')}</li>
            <li>{t('agentsTab1Desc3')}</li>
            <li>{t('agentsTab1Desc4')}</li>
          </ul>
          <a href="https://huggingface.co/chat/assistants?user=Piotr-Macai" className="Btn">{t('agentsTabVisit')}</a>
        </div>
      ),
    },
    {
      id: "2",
      label: "AI Voice Support Agent",
      content: (
        <div>
          <h2>{t('agentsTab2Title')}</h2>
          <img src={images.elevenbot} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
          <ul>
            <li>{t('agentsTab2Desc1')}</li>
            <li>{t('agentsTab2Desc2')}</li>
            <li>{t('agentsTab2Desc3')}</li>
            <li>{t('agentsTab2Desc4')}</li>
        </ul>
        <a href="https://you.com/?chatMode=user_mode_e24077a4-a9b7-490c-b281-f88d98921146" className="Btn">{t('agentsTabVisit')}</a>
        </div>
      ),
    },
    {
      id: "3",
      label: "Lead Gen Agent",
      content: (
        <div>
          <h2>{t('agentsTab3Title')}</h2>
          <img src={images.botpressleadbot} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
          <ul>
            <li>{t('agentsTab3Desc1')}</li>
            <li>{t('agentsTab3Desc2')}</li>
            <li>{t('agentsTab3Desc3')}</li>
        </ul>
        <a href="https://you.com/?chatMode=user_mode_e24077a4-a9b7-490c-b281-f88d98921146" className="Btn">{t('agentsTabVisit')}</a>
        </div>
      ),
    },
    {
      id: "4",
      label: "Google AI Studio",
      content: (
        <div>
          <h2>{t('agentsTab4Title')}</h2>
          <img src={images.googleassistants} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
          <ul>
            <li>{t('agentsTab4Desc1')}</li>
            <li>{t('agentsTab4Desc2')}</li>
            <li>{t('agentsTab4Desc3')}</li>
        </ul>
        <a href="https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221qCpAuBN9NQPqK2D_7tTYpkB9hie68jkB%22%5D,%22action%22:%22open%22,%22userId%22:%22107251799852694633800%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing" 
            className="Btn">{t('agentsTabVisit')}
        </a>
        </div>
      ),
    },
    {
        id: "5",
        label: "AI Ecom Agent",
        content: (
          <div>
            <h2>{t('agentsTab5Title')}n</h2>
            <img src={images.voiceflowchat1} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
            <ul>
              <li>{t('agentsTab5Desc1')}</li>
              <li>{t('agentsTab5Desc2')}</li>
              <li>{t('agentsTab5Desc3')}</li>
          </ul>
          <a href="https://poe.com/piotrmacai" className="Btn">{t('agentsTabVisit')}</a>
          </div>
        ),
      },
      {
        id: "6",
        label: "Cusstom AI Agent with memory and sign-up In Next.js",
        content: (
          <div>
            <h2>{t('agentsTab6Title')}n</h2>
            <img src={images.nextjsbot} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
            <ul>
              <li>{t('agentsTab6Desc1')}</li>
              <li>{t('agentsTab6Desc2')}</li>
              <li>{t('agentsTab6Desc3')}</li>
              <li>{t('agentsTab6Desc4')}</li>
          </ul>
          <a href="https://poe.com/piotrmacai" className="Btn">{t('agentsTabVisit')}</a>
          </div>
        ),
      },
      // {
      //   id: "5",
      //   label: "Monica",
      //   content: (
      //     <div>
      //       <h2>My Monica.im Assistants</h2>
      //       <img src={images.monicaassistants} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
      //       <ul>
      //         <li>Personal Assistant</li>
      //         <li>Offer creator</li>
      //     </ul>
      //     <a href="https://monica.im/home/bots" className="Btn">My Monica.im Assistants</a>
      //     </div>
      //   ),
      // },
      // {
      //   id: "6",
      //   label: "Glif.app",
      //   content: (
      //     <div>
      //       <h2>My Glif.app Assistants</h2>
      //       <img src={images.glifs} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
      //       <ul>
      //         <li>Image-to-text Prompt Generator</li>
      //         <li>Ultrarealistic images Generator</li>
      //     </ul>
      //       <a href="https://glif.app/@PiotrMacai" className="Btn">My Glifs</a>
      //     </div>
      //   ),
      // },
  ];
};
