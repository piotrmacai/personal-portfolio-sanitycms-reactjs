import React from 'react';
import { useTranslation } from "react-i18next";
import { images } from '../../constants';
import './AgentTabs.scss';

export const AgentTabsData = () => {
  const { t } = useTranslation();
  
  return [
    {
      id: "Huggingface",
      label: "Huggingface",
      content: (
        <div>
          <h2>My Huggingface Assitants</h2>
          {/* <img src={images.cta1} className="app_header-img" alt="profile_bg" /> */}
          <p>{t('Overview content goes here, describing key features and functionality.')}</p>
          <a href="https://huggingface.co" className="Btn">My Huggingface Assistants</a>
        </div>
      ),
    },
    {
      id: "setup",
      label: "Poe.com",
      content: (
        <div>
          <h2>My Poe.com Assistants</h2>
          <p>{t('Setup instructions content goes here.')}</p>
          <ol>
            <li>{t('Step 1: Download the package')}</li>
            <li>{t('Step 2: Configure settings')}</li>
            <li>{t('Step 3: Install dependencies')}</li>
          </ol>
        </div>
      ),
    },
    {
      id: "usage",
      label: "My You.com Assistants",
      content: (
        <div>
          <h2>{t('Usage')}</h2>
          <p>{t('Usage guidelines and examples content goes here, including example commands or code snippets.')}</p>
          <img src="../assets/usage-example.png" alt="Usage example" />
        </div>
      ),
    },
    {
      id: "api",
      label: "My Google AI Studio Assistants",
      content: (
        <div>
          <h2>{t('API Reference')}</h2>
          <p>{t('API reference and methods content goes here, with detailed descriptions for each API endpoint.')}</p>
          <ul>
            <li><strong>GET /endpoint1</strong>: {t('Description of endpoint 1')}</li>
            <li><strong>POST /endpoint2</strong>: {t('Description of endpoint 2')}</li>
          </ul>
        </div>
      ),
    },
  ];
};
