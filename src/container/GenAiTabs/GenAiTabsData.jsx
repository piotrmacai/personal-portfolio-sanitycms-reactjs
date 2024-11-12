import React from 'react';
import { useTranslation } from "react-i18next";
import { images } from '../../constants';
import './GenAiTabs.scss';

export const GenAiTabsData = () => {
  const { t } = useTranslation();
  
  return [
    {
      id: "1",
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
      id: "2",
      label: "Youtube",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>My Youtube Channel with AI generated and human edited videos</h2>
          <img src={images.youtube} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('resourcesTabDesc4')}</p>
          <a href="https://www.youtube.com/@MacaiStudio" className="Btn">My Youtube</a>
        </div>
      ),
    },
    {
      id: "3",
      label: "Instagram",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>Instagram with GenAi Artworks</h2>
          <p>{t('resourcesTabDesc2')}</p>
          <img src={images.instagram} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <a href="https://www.instagram.com/piotr.macai/" className="Btn">My Instagram</a>
        </div>
      ),
    },
    {
      id: "5",
      label: "Artstation",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>Artstation with GenAi Artworks</h2>
          <img src={images.myartstation} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('resourcesTabDesc3')}</p>
          <a href="https://www.artstation.com/piotrmacai" className="Btn">My Artstation</a>
        </div>
      ),
    },
    // {
    //   id: "4",
    //   label: "Deviant Art",
    //   content: (
    //     <div>
    //       <h2 style={{ marginBottom: '30px' }}>Ainsider AI Newsletter with Beehiiv</h2>
    //       <img src={images.beehiv} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
    //       <p>{t('resourcesTabDesc5')}</p>
    //       <a href="https://ainsider.beehiiv.com/" className="Btn">DeviantArt</a>
    //     </div>
    //   ),
    // },
    // {
    //   id: "4",
    //   label: "Ainsider.pl",
    //   content: (
    //     <div>
    //       <h2 style={{ marginBottom: '30px' }}>Ainsider.pl - AI Tools Directory for polish audience</h2>
    //       <img src={images.ainsiderpl} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
    //       <p>{t('resourcesTabDesc4')}</p>
    //       <a href="https://ainsider.pl" className="Btn">Ainsider.pl</a>
    //     </div>
    //   ),
    // },
    {
      id: "5",
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
      id: "6",
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
    // {
    //   id: "6",
    //   label: "Image-to-text AI Assistant",
    //   content: (
    //     <div>
    //       <h2 style={{ marginBottom: '30px' }}>Set of AI Agent and Assistants</h2>
    //       <img src={images.hfassistants} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
    //       <p>{t('resourcesTabDesc6')}</p>
    //       <a href="/assistants" className="Btn">AI Agents and Assitants</a>
    //     </div>
    //   ),
    // },
  ];
};
