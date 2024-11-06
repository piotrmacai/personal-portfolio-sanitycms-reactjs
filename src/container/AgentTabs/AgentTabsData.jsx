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
          <h2 style={{ marginBottom: '30px' }}>My Huggingface Assitants</h2>
          <img src={images.hfassistant} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
          {/* <p>{t('Overview content goes here, describing key features and functionality.')}</p> */}
          <ul>
            <li>Personal Assistant</li>
            <li>AI Software & Tool Recomendation</li>
            <li>Email Writer</li>
          </ul>
          <a href="https://huggingface.co/chat/assistants?user=Piotr-Macai" className="Btn">My Huggingface Assistants</a>
        </div>
      ),
    },
    {
      id: "2",
      label: "You.com",
      content: (
        <div>
          <h2>My You.com Assistants</h2>
          <img src={images.youassistants} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
          <ul>
            <li>Image-to-Text Prompt Generator</li>
            <li>Text-to-Image Prompt Enhancer</li>
        </ul>
        <a href="https://you.com/?chatMode=user_mode_e24077a4-a9b7-490c-b281-f88d98921146" className="Btn">My You.com Assistants</a>
        </div>
      ),
    },
    {
      id: "3",
      label: "Google AI Studio",
      content: (
        <div>
          <h2>My Google AI Studio Assistants</h2>
          <img src={images.googleassistants} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
          <ul>
            <li>Personal AI Assistant</li>
            <li>Image-to-Text Prompt Generator</li>
            <li>AI Video Prompt Creator</li>
        </ul>
        <a href="https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221qCpAuBN9NQPqK2D_7tTYpkB9hie68jkB%22%5D,%22action%22:%22open%22,%22userId%22:%22107251799852694633800%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing" 
            className="Btn">My Google AI Studio Assistants
        </a>
        </div>
      ),
    },
    {
        id: "4",
        label: "Poe.com",
        content: (
          <div>
            <h2>My Poe.com Assistants</h2>
            <img src={images.poeassistants} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
            <ul>
              <li>Business Offer Writer</li>
              <li>AI Video Prompt Generator</li>
              <li>Image-to-Text Prompter</li>
          </ul>
          <a href="https://poe.com/piotrmacai" className="Btn">My Poe.com Assistants</a>
          </div>
        ),
      },
      {
        id: "5",
        label: "Monica",
        content: (
          <div>
            <h2>My Monica.im Assistants</h2>
            <img src={images.monicaassistants} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
            <ul>
              <li>Personal Assistant</li>
              <li>Offer creator</li>
          </ul>
          <a href="https://monica.im/home/bots" className="Btn">My Monica.im Assistants</a>
          </div>
        ),
      },
      {
        id: "6",
        label: "Glif.app",
        content: (
          <div>
            <h2>My Glif.app Assistants</h2>
            <img src={images.glifs} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px' }} />
            <ul>
              <li>Image-to-text Prompt Generator</li>
              <li>Ultrarealistic images Generator</li>
          </ul>
            <a href="https://glif.app/@PiotrMacai" className="Btn">My Glifs</a>
          </div>
        ),
      },
  ];
};
