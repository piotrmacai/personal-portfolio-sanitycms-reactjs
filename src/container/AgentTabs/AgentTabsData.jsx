import React from 'react';
import { useTranslation } from "react-i18next";
import { images } from '../../constants';
import './AgentTabs.scss';

export const AgentTabsData = () => {
  const { t } = useTranslation();
  
  return [
    {
      id: "1",
      label: "DeepSeek Local RAG AI",
      content: (
        <div>
          <h2>{t('agentsDeepseekTitle')}n</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab7Description1')}</p>
          <img src={images.deepseekimg} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab7Description2')}</p>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsDeepseekDesc1')}</li>
            <li>{t('agentsDeepseekDesc2')}</li>
            <li>{t('agentsDeepseekDesc3')}</li>
        </ul>
        <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
        {t('agentsTabIntegrationsTitle')}
        </h2>
        <ul style={{ paddingLeft: '20px'}}>
          <li>{t('agentsTabIntegrations1')}</li>
          <li>{t('agentsTabIntegrations2')}</li>
          <li>{t('agentsTabIntegrations3')}</li>
          <li>{t('agentsTabIntegrations4')}</li>
          <li>{t('agentsTabIntegrations5')}</li>
        </ul>
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://github.com/piotrmacai/agent-flowise-local-ollama-rag" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "1.1",
      label: "Google AI Studio Custom Assistant App",
      content: (
        <div>
          <h2>{t('googlenextTitle')}n</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('googlenextDescription1')}</p>
          <img src={images.googleaijs} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('googlenextDescription2')}</p>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('googlenextDesc1')}</li>
            <li>{t('googlenextDesc2')}</li>
            <li>{t('googlenextDesc3')}</li>
        </ul>
        <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
        {t('agentsTabIntegrationsTitle')}
        </h2>
        <ul style={{ paddingLeft: '20px'}}>
          <li>{t('agentsTabIntegrations1')}</li>
          <li>{t('agentsTabIntegrations2')}</li>
          <li>{t('agentsTabIntegrations3')}</li>
          <li>{t('agentsTabIntegrations4')}</li>
          <li>{t('agentsTabIntegrations5')}</li>
        </ul>
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://github.com/piotrmacai/agent-flowise-local-ollama-rag" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "1.2",
      label: "Google AI Studio Custom Assistant App at Python",
      content: (
        <div>
          <h2>{t('googlestreamlitTitle')}n</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('googlestreamlitDescription1')}</p>
          <img src={images.googleaipython} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('googlestreamlitDescription2')}</p>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('googlestreamlitDesc1')}</li>
            <li>{t('googlestreamlitDesc2')}</li>
            <li>{t('googlestreamlitDesc3')}</li>
        </ul>
        <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
        {t('agentsTabIntegrationsTitle')}
        </h2>
        <ul style={{ paddingLeft: '20px'}}>
          <li>{t('agentsTabIntegrations1')}</li>
          <li>{t('agentsTabIntegrations2')}</li>
          <li>{t('agentsTabIntegrations3')}</li>
          <li>{t('agentsTabIntegrations4')}</li>
          <li>{t('agentsTabIntegrations5')}</li>
        </ul>
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://github.com/piotrmacai/agent-flowise-local-ollama-rag" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "2",
      label: "Customer Support Agent",
      content: (
        <div>
          <h2>{t('agentsTabSupportBotTitle')}</h2>
          <p style={{ marginTop: '10px' }}>{t('agentsTabSupportBotDescription1')}</p>
          <img src={images.mbotpress} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTabSupportBotDescription2')}</p>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsTabSupportBotDesc1')}</li>
            <li>{t('agentsTabSupportBotDesc2')}</li>
            <li>{t('agentsTabSupportBotDesc3')}</li>
        </ul>
        <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
          {t('agentsTabIntegrationsTitle')}
          </h2>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsTabIntegrations1')}</li>
            <li>{t('agentsTabIntegrations2')}</li>
            <li>{t('agentsTabIntegrations3')}</li>
            <li>{t('agentsTabIntegrations4')}</li>
            <li>{t('agentsTabIntegrations5')}</li>
          </ul>
          <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
          {t('agentsTabIntegrationsWho')}
          </h2>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsTabIntegrationsWho1')}</li>
            <li>{t('agentsTabIntegrationsWho2')}</li>
            <li>{t('agentsTabIntegrationsWho3')}</li>
            <li>{t('agentsTabIntegrationsWho4')}</li>
          </ul>
          <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://macai.studio" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "3",
      label: "Lead Gen Agent",
      content: (
        <div>
          <h2>{t('agentsTab3Title')}</h2>
          <p style={{ marginTop: '10px' }}>{t('agentsTab3Description1')}</p>
          <img src={images.botpressleadbot} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab3Description2')}</p>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsTab3Desc1')}</li>
            <li>{t('agentsTab3Desc2')}</li>
            <li>{t('agentsTab3Desc3')}</li>
        </ul>
        <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
          {t('agentsTabIntegrationsTitle')}
          </h2>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsTabIntegrations1')}</li>
            <li>{t('agentsTabIntegrations2')}</li>
            <li>{t('agentsTabIntegrations3')}</li>
            <li>{t('agentsTabIntegrations4')}</li>
            <li>{t('agentsTabIntegrations5')}</li>
          </ul>
          <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
          {t('agentsTabIntegrationsWhoe')}
          </h2>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsTabIntegrationsWhoe1')}</li>
            <li>{t('agentsTabIntegrationsWhoe2')}</li>
            <li>{t('agentsTabIntegrationsWhoe3')}</li>
            <li>{t('agentsTabIntegrationsWhoe4')}</li>
          </ul>
          <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://macai.studio" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "4",
      label: "AI Ecom Agent",
      content: (
        <div>
          <h2>{t('agentsTab5Title')}n</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab5Description1')}</p>
          <img src={images.mecom} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab5Description2')}</p>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsTab5Desc1')}</li>
            <li>{t('agentsTab5Desc2')}</li>
            <li>{t('agentsTab5Desc3')}</li>
        </ul>
        <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
        {t('agentsTabIntegrationsTitle')}
        </h2>
        <ul style={{ paddingLeft: '20px'}}>
          <li>{t('agentsTabIntegrations1')}</li>
          <li>{t('agentsTabIntegrations2')}</li>
          <li>{t('agentsTabIntegrations3')}</li>
          <li>{t('agentsTabIntegrations4')}</li>
          <li>{t('agentsTabIntegrations5')}</li>
        </ul>
        {/* <a href="https://macai.cloud" className="Btn">{t('agentsTabVisit')}</a> */}
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        </div>
      ),
    }, 
    {
      id: "5",
      label: "Local RAG AI Assistant",
      content: (
        <div>
          <h2>{t('agentsTab7Title')}n</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab7Description1')}</p>
          <img src={images.mollama} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab7Description2')}</p>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsTab7Desc1')}</li>
            <li>{t('agentsTab7Desc2')}</li>
            <li>{t('agentsTab7Desc3')}</li>
        </ul>
        <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
        {t('agentsTabIntegrationsTitle')}
        </h2>
        <ul style={{ paddingLeft: '20px'}}>
          <li>{t('agentsTabIntegrations1')}</li>
          <li>{t('agentsTabIntegrations2')}</li>
          <li>{t('agentsTabIntegrations3')}</li>
          <li>{t('agentsTabIntegrations4')}</li>
          <li>{t('agentsTabIntegrations5')}</li>
        </ul>
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://github.com/piotrmacai/agent-flowise-local-ollama-rag" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "6",
      label: "AI Voice Support Agent",
      content: (
        <div>
          <h2>{t('agentsTab2Title')}</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab2Description1')}</p>
          <img src={images.mockupvoicebot} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }}/>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab2Description2')}</p>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsTab2Desc1')}</li>
            <li>{t('agentsTab2Desc2')}</li>
            <li>{t('agentsTab2Desc3')}</li>
            <li>{t('agentsTab2Desc4')}</li>
        </ul>
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://szkolajazdymachowski.pl/kontakt.html" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "7",
      label: "Huggingface",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>
          {t('agentsTab1Title')}
          </h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab1Description1')}</p>
          <img src={images.hfassistantsapp} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          {/* <p>{t('Overview content goes here, describing key features and functionality.')}</p> */}
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsTab1Desc1')}</li>
            <li>{t('agentsTab1Desc2')}</li>
            <li>{t('agentsTab1Desc3')}</li>
          </ul>
          <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
          {t('agentsTabIntegrationsTitle')}
          </h2>
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsTabIntegrations1')}</li>
            <li>{t('agentsTabIntegrations2')}</li>
            <li>{t('agentsTabIntegrations3')}</li>
            <li>{t('agentsTabIntegrations4')}</li>
            <li>{t('agentsTabIntegrations5')}</li>
          </ul>
          <a href="/contact" className="Btn">{t('cta_agent')}</a>
        </div>
      ),
    },
   
    {
      id: "8",
      label: "Google AI Studio",
      content: (
        <div>
          <h2>{t('agentsTab4Title')}</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab4Description1')}</p>
          <img src={images.googleassistants} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li>{t('agentsTab4Desc1')}</li>
            <li>{t('agentsTab4Desc2')}</li>
            <li>{t('agentsTab4Desc3')}</li>
        </ul>
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221qCpAuBN9NQPqK2D_7tTYpkB9hie68jkB%22%5D,%22action%22:%22open%22,%22userId%22:%22107251799852694633800%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing" 
            className="Btn">{t('agentsTabVisit')}
        </a> */}
        </div>
      ),
    },
      {
        id: "9",
        label: "Custom AI Agent in Next.js",
        content: (
          <div>
            <h2>{t('agentsTab6Title')}n</h2>
            <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab6Description1')}</p>
            <img src={images.mwrapper} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
            <ul style={{ paddingLeft: '20px'}}>
              <li>{t('agentsTab6Desc1')}</li>
              <li>{t('agentsTab6Desc2')}</li>
              <li>{t('agentsTab6Desc3')}</li>
              <li>{t('agentsTab6Desc4')}</li>
          </ul>
          <a href="/contact" className="Btn">{t('cta_agent')}</a>
          {/* <a href="https://github.com/piotrmacai/ai-chatbot-vercel-v1.0" className="Btn">{t('agentsTabVisit')}</a> */}
          </div>
        ),
      },
      // {
      //   id: "9",
      //   label: "AI Tools Finder",
      //   content: (
      //     <div>
      //       <h2>{t('agentsTab8Title')}</h2>
      //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab8Description1')}</p>
      //       <img src={images.aitoolsagent} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
      //       <ul style={{ paddingLeft: '20px'}}>
      //         <li>{t('agentsTab8Desc1')}</li>
      //         <li>{t('agentsTab8Desc2')}</li>
      //         <li>{t('agentsTab8Desc3')}</li>
      //     </ul>
      //     <a href="/contact" className="Btn">{t('cta_agent')}</a>

      //     {/* <a href="https://github.com/piotrmacai/agent-flowise-aitoolsfinder" className="Btn">{t('agentsTabVisit')}</a> */}
      //     </div>
      //   ),
      // },
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
