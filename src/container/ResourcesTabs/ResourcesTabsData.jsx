import React from 'react';
import { useTranslation } from "react-i18next";
import { images } from '../../constants';
import './ResourcesTabs.scss';

export const ResourcesTabsData = () => {
  const { t } = useTranslation();
  
  return [
    {
      id: "1",
      label: "Ainsider.tools",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>Ainsider.tools - AI Tools Directory for creators</h2>
          <img src={images.insdrcloud} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('resourcesTabDesc1')}</p>
          <a href="https://ainsider.tools" className="Btn">Ainsider.tools</a>
        </div>
      ),
    },
    {
      id: "2",
      label: "Insdr.cloud",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>Insdr.cloud - Web & AI & Automation Agency</h2>
          <p>{t('resourcesTabDesc2')}</p>
          <img src={images.insdr} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <a href="https://insdr.cloud" className="Btn">Insdr.cloud</a>
        </div>
      ),
    },
    {
      id: "3",
      label: "Macai.studio",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>Macai.studio - Visuals created by AI mixed with human touch</h2>
          <img src={images.macai} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('resourcesTabDesc3')}</p>
          <a href="https://macai.studio" className="Btn">Macai.studio</a>
        </div>
      ),
    },
    {
      id: "4",
      label: "Ainsider.pl",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>Ainsider.pl - AI Tools Directory for polish audience</h2>
          <img src={images.ainsiderpl} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('resourcesTabDesc4')}</p>
          <a href="https://ainsider.pl" className="Btn">Ainsider.pl</a>
        </div>
      ),
    },
    {
      id: "5",
      label: "AI Newsletter",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>Ainsider AI Newsletter with Beehiiv</h2>
          <img src={images.beehiv} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('resourcesTabDesc5')}</p>
          <a href="https://ainsider.beehiiv.com/" className="Btn">Newsletter</a>
        </div>
      ),
    },
    {
      id: "6",
      label: "AI Assistants",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>Set of AI Agent and Assistants</h2>
          <img src={images.hfassistants} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('resourcesTabDesc6')}</p>
          <a href="/assistants" className="Btn">AI Agents and Assitants</a>
        </div>
      ),
    },
  ];
};
