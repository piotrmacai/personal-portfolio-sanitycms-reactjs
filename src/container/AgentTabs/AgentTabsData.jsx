import React from 'react';
import { useTranslation } from "react-i18next";
import { images } from '../../constants';
import './AgentTabs.scss';
import { Link } from 'react-router-dom';

export const AgentTabsData = () => {
  const { t } = useTranslation();
  
  return [
    // {
    //   id: "1",
    //   label: "Personal AI Asistants & Agents",
    //   content: (
    //     <div>
    //       <h2>{t('personalAgentsTitle')}n</h2>
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('personalAgentsDescription1')}</p>
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('personalAgentsDescription2')}</p>
    //       <img src={images.deepseekimg} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li style={{ marginBottom: '10px' }}>{t('personalAgents1')} :  <br />
    //           <a href="https://github.com/piotrmacai/agent-ollama-deepseek-localrag" target="_blank" rel="noreferrer">https://github.com/piotrmacai/agent-ollama-deepseek-localrag</a>
    //         </li> 
    //         <li style={{ marginBottom: '10px' }}>{t('personalAgents2')} :   <br />             
    //           <a href="https://github.com/piotrmacai/agent-flowise-local-ollama-rag" target="_blank" rel="noreferrer"> https://github.com/piotrmacai/agent-flowise-local-ollama-rag</a>
    //         </li>
    //         <li style={{ marginBottom: '10px' }}>{t('personalAgents3')} :  <br />
    //           <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer"> https://github.com/piotrmacai/</a>
    //         </li>
    //     </ul>
    //     <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
    //     {t('agentsTabIntegrationsTitle')}
    //     </h2>
    //     <ul style={{ paddingLeft: '20px'}}>
    //       <li>{t('agentsTabIntegrations1')}</li>
    //       <li>{t('agentsTabIntegrations2')}</li>
    //       <li>{t('agentsTabIntegrations3')}</li>
    //       <li>{t('agentsTabIntegrations4')}</li>
    //       <li>{t('agentsTabIntegrations5')}</li>
    //     </ul>
    //     <Link to="/contact" className="Btn">{t('cta_agent')}</Link>
    //     </div>
    //   ),
    // },
    {
      id: "1",
      label: "Local AI Agents",
      content: (
        <div>
          <h2>{t('localAgentsTitle')}</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('localAgentsDescription1')}</p>
          <img src={images.deepseekimg} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('localAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/agent-ollama-deepseek-localrag" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-ollama-deepseek-localrag</a>
            </li> 
            <li style={{ marginBottom: '10px' }}>{t('localAgents2')} :   <br />             
              <a href="https://github.com/piotrmacai/agent-flowise-local-ollama-rag" target="_blank" rel="noreferrer"> github.com/piotrmacai/agent-flowise-local-ollama-rag</a>
            </li>
            <li style={{ marginBottom: '10px' }}>{t('localAgents3')} :  <br />
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer">github.com/piotrmacai</a>
            </li>
        </ul>
        {/* <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
        {t('agentsTabIntegrationsTitle')}
        </h2>
        <ul style={{ paddingLeft: '20px'}}>
          <li>{t('agentsTabIntegrations1')}</li>
          <li>{t('agentsTabIntegrations2')}</li>
          <li>{t('agentsTabIntegrations3')}</li>
          <li>{t('agentsTabIntegrations4')}</li>
          <li>{t('agentsTabIntegrations5')}</li>
        </ul> */}
        <Link to="/contact" className="Btn">{t('cta_agent')}</Link>
        {/* <a href="https://github.com/piotrmacai/agent-flowise-local-ollama-rag" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "2",
      label: "Web Search AI Agents",
      content: (
        <div>
          <h2>{t('researchAgentsTitle')}n</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('researchAgentsDesc1')}</p>
          <img src={images.resdeepseek} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('researchAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/agent-ollama-deepseek-researcher" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-ollama-deepseek-researcher</a>
            </li> 
            <li style={{ marginBottom: '10px' }}>
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer">github.com/piotrmacai</a>
            </li>
        </ul>
        <Link to="/contact" className="Btn">{t('cta_agent')}</Link>
        </div>
      ),
    },
    {
      id: "3",
      label: "Lead Generation Agents",
      content: (
        <div>
          <h2>{t('leadAgentsTitle')}</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('leadAgentsDescription1')}</p>
          <img src={images.elevenbot} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('leadAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/agent-botpress-leadbot-v2" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-botpress-leadbot-v2</a>
            </li>  
            <li style={{ marginBottom: '10px' }}>{t('leadAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/aiagent-botpress-businessleadbot" target="_blank" rel="noreferrer">github.com/piotrmacai/aiagent-botpress-businessleadbot</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer">github.com/piotrmacai</a>
            </li>
            <li style={{ marginBottom: '10px' }}>          
              <a href="https://macai.studio/contact" target="_blank" rel="noreferrer"> Agent at Macai Studio </a>
            </li>
           
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
        <Link to="/contact" className="Btn">{t('cta_agent')}</Link>
        </div>
      ),
    },
    {
      id: "4",
      label: "Support Agents",
      content: (
        <div>
          <h2>{t('supportAgentsTitle')}</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('supportAgentsDescription1')}</p>
          <img src={images.mbotpress} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('supportAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/agent-botpress-leadbot-v2" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-botpress-leadbot-v2</a>
            </li>   
            <li style={{ marginBottom: '10px' }}>{t('supportAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/aiagent-botpress-businessleadbot" target="_blank" rel="noreferrer">github.com/piotrmacai/aiagent-botpress-businessleadbot</a>
            </li>
             <li style={{ marginBottom: '10px' }}>{t('supportAgents3')} :  <br />
              <a href="https://github.com/piotrmacai/agent-flowise-ragtools-support-agent" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-flowise-ragtools-support-agent</a>
            </li>
              <li style={{ marginBottom: '10px' }}>{t('ecomAgents2')} :   <br />             
              <a href="https://github.com/piotrmacai/agent-voiceflow-ecom-v1" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-voiceflow-ecom-v1 </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer">github.com/piotrmacai</a>
            </li>
         
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
        <Link to="/contact" className="Btn">{t('cta_agent')}</Link>
        </div>
      ),
    },
    {
      id: "5",
      label: "Ecom Agents",
      content: (
        <div>
          <h2>{t('ecomAgentsTitle')}</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('ecomAgentsDescription1')}</p>
          <img src={images.mecom} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('ecomAgents2')} :   <br />             
              <a href="https://github.com/piotrmacai/agent-voiceflow-ecom-v1" target="_blank" rel="noreferrer"> github.com/piotrmacai/agent-voiceflow-ecom-v1 </a>
            </li>
            <li style={{ marginBottom: '10px' }}>{t('ecomAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/agent-botpress-leadbot-v2" target="_blank" rel="noreferrer"> github.com/piotrmacai/agent-botpress-leadbot-v2</a>
            </li> 
            <li style={{ marginBottom: '10px' }}>{t('ecomAgents3')} :  <br />
              <a href="https://ainsider.store" target="_blank" rel="noreferrer"> ainsider.store</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer"> github.com/piotrmacai</a>
            </li>
        </ul>
        <Link to="/contact" className="Btn">{t('cta_agent')}</Link>
        </div>
      ),
    },
    {
      id: "6",
      label: "Voice AI Agents",
      content: (
        <div>
          <h2>{t('voiceAgentsTitle')}</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('voiceAgentsDescription1')}</p>
          <img src={images.mockupvoicebot} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('voiceAgents1')} :  <br />
              <a href="https://macai.studio" target="_blank" rel="noreferrer">macai.studio</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer"> github.com/piotrmacai/</a>
            </li> 
        </ul>

        <Link to="/contact" className="Btn">{t('cta_agent')}</Link>
        </div>
      ),
    },
    {
      id: "7",
      label: "Google AI Studio",
      content: (
        <div>
          <h2>{t('googleAgentsTitle')}</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('googleAgentsDescription1')}</p>
          <img src={images.googleaijs} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('googleAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/assistant-ai-googlestudio-nextjs" target="_blank" rel="noreferrer">github.com/piotrmacai/assistant-ai-googlestudio-nextjs</a>
            </li> 
            <li style={{ marginBottom: '10px' }}>{t('pythonAgents2')} :   <br />             
              <a href="https://github.com/piotrmacai/assistant-ai-googlestudio-streamlit" target="_blank" rel="noreferrer"> github.com/piotrmacai/assistant-ai-googlestudio-streamlit </a>
            </li>
            <li style={{ marginBottom: '10px' }}>{t('localAgents3')}
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer">github.com/piotrmacai</a>
            </li> 
        </ul>

        <Link to="/contact" className="Btn">{t('cta_agent')}</Link>
        </div>
      ),
    },
    {
      id: "8",
      label: "DeepSeek AI",
      content: (
        <div>
          <h2>{t('agentsDeepseekTitle')}n</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab7Description1')}</p>
          <img src={images.deepseekimg} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab7Description2')}</p>
   
        <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('ecomAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/agent-ollama-deepseek-localrag" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-ollama-deepseek-localrag</a>
            </li> 
            <li style={{ marginBottom: '10px' }}>
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer"> github.com/piotrmacai</a>
            </li> 
        </ul>
      
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://github.com/piotrmacai/agent-flowise-local-ollama-rag" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "9",
      label: "AI Agents in Javascript / Next.js",
      content: (
        <div>
          <h2>{t('jsAgentsTitle')}n</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('jsAgentsDesc1')}</p>
          <img src={images.mwrapper} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('jsAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/ai-chatbot-vercel-v1.0" target="_blank" rel="noreferrer">github.com/piotrmacai/ai-chatbot-vercel-v1.0</a>
            </li> 
            <li style={{ marginBottom: '10px' }}>{t('jsAgents2')} :   <br />             
              <a href="https://github.com/piotrmacai/assistant-ai-googlestudio-nextjs" target="_blank" rel="noreferrer"> github.com/piotrmacai/assistant-ai-googlestudio-nextjs </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer"> github.com/piotrmacai</a>
            </li> 
        </ul>
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://github.com/piotrmacai/ai-chatbot-vercel-v1.0" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "10",
      label: "AI Agents in Python",
      content: (
        <div>
          <h2>{t('pythonAgentsTitle')}n</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('pythonAgentsDesc1')}</p>
          <img src={images.googleaipython} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('pythonAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/agent-ollama-deepseek-localrag" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-ollama-deepseek-localrag</a>
            </li> 
            <li style={{ marginBottom: '10px' }}>{t('pythonAgents2')} :   <br />             
              <a href="https://github.com/piotrmacai/assistant-ai-googlestudio-streamlit" target="_blank" rel="noreferrer"> github.com/piotrmacai/assistant-ai-googlestudio-streamlit </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer"> github.com/piotrmacai</a>
            </li> 
        </ul>
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://github.com/piotrmacai/ai-chatbot-vercel-v1.0" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "11",
      label: "AI Agents in Flowise",
      content: (
        <div>
          <h2>{t('flowiseTitle')}n</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('flowiseDesc1')}</p>
          <img src={images.mmao} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('flowiseAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/agent-flowise-ragtools-support-agent" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-flowise-ragtools-support-agent</a>
            </li> 
            <li style={{ marginBottom: '10px' }}>{t('flowiseAgents2')} :   <br />             
              <a href="https://github.com/piotrmacai/agent-flowise-local-ollama-rag" target="_blank" rel="noreferrer"> github.com/piotrmacai/agent-flowise-local-ollama-rag</a>
            </li>
            <li style={{ marginBottom: '10px' }}>{t('flowiseAgents3')} :  <br />
              <a href="github.com/piotrmacai/agent-flowise-visionAgents" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-flowise-visionAgents</a>
            </li> 
            <li style={{ marginBottom: '10px' }}>{t('flowiseAgents4')} :   <br />             
              <a href="https://github.com/piotrmacai/agent-flowise-sequentialAgents" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-flowise-sequentialAgents</a>
            </li>
            <li style={{ marginBottom: '10px' }}>{t('flowiseAgents5')} :   <br />             
              <a href="https://github.com/piotrmacai/aiagent-flowise-agents-orchestration-rag" target="_blank" rel="noreferrer">github.com/piotrmacai/aiagent-flowise-agents-orchestration-rag</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer"> github.com/piotrmacai</a>
            </li> 
        </ul>
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://github.com/piotrmacai/ai-chatbot-vercel-v1.0" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "12",
      label: "AI Agents in Botpress",
      content: (
        <div>
          <h2>{t('botpressTitle')}n</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('botpressDesc1')}</p>
          <img src={images.mbotpress} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('botpressAgents1')} :  <br />
              <a href="https://github.com/piotrmacai/aiagent-botpress-businessleadbot" target="_blank" rel="noreferrer">github.com/piotrmacai/aiagent-botpress-businessleadbot</a>
            </li> 
            <li style={{ marginBottom: '10px' }}>{t('botpressAgents2')} :   <br />             
              <a href="https://github.com/piotrmacai/agent-botpress-leadbot-v2" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-botpress-leadbot-v2 </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer"> github.com/piotrmacai</a>
            </li> 
        
        </ul>
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://github.com/piotrmacai/ai-chatbot-vercel-v1.0" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    {
      id: "13",
      label: "AI Agents in Voiceflow",
      content: (
        <div>
          <h2>{t('voiceflowTitle')}n</h2>
          <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('voiceflowDesc1')}</p>
          <img src={images.mecom} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
          <ul style={{ paddingLeft: '20px'}}>
            <li style={{ marginBottom: '10px' }}>{t('voiceflowAgents2')} :  <br />
              <a href="https://github.com/piotrmacai/agent-voiceflow-ecom-v1" target="_blank" rel="noreferrer">github.com/piotrmacai/agent-voiceflow-ecom-v1</a>
            </li> 
            <li style={{ marginBottom: '10px' }}>{t('voiceflowAgents1')} :   <br />             
              <a href="https://github.com/piotrmacai/aiagent-voiceflow-leadbot" target="_blank" rel="noreferrer">github.com/piotrmacai/aiagent-voiceflow-leadbot </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="https://github.com/piotrmacai/" target="_blank" rel="noreferrer"> github.com/piotrmacai</a>
            </li> 
        </ul>
        <a href="/contact" className="Btn">{t('cta_agent')}</a>
        {/* <a href="https://github.com/piotrmacai/ai-chatbot-vercel-v1.0" className="Btn">{t('agentsTabVisit')}</a> */}
        </div>
      ),
    },
    // {
    //   id: "1",
    //   label: "DeepSeek Local RAG AI",
    //   content: (
    //     <div>
    //       <h2>{t('agentsDeepseekTitle')}n</h2>
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab7Description1')}</p>
    //       <img src={images.deepseekimg} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab7Description2')}</p>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsDeepseekDesc1')}</li>
    //         <li>{t('agentsDeepseekDesc2')}</li>
    //         <li>{t('agentsDeepseekDesc3')}</li>
    //     </ul>
    //     <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
    //     {t('agentsTabIntegrationsTitle')}
    //     </h2>
    //     <ul style={{ paddingLeft: '20px'}}>
    //       <li>{t('agentsTabIntegrations1')}</li>
    //       <li>{t('agentsTabIntegrations2')}</li>
    //       <li>{t('agentsTabIntegrations3')}</li>
    //       <li>{t('agentsTabIntegrations4')}</li>
    //       <li>{t('agentsTabIntegrations5')}</li>
    //     </ul>
    //     <a href="/contact" className="Btn">{t('cta_agent')}</a>
    //     </div>
    //   ),
    // },
    // {
    //   id: "1.1",
    //   label: "Google AI Studio Custom Assistant App",
    //   content: (
    //     <div>
    //       <h2>{t('googlenextTitle')}n</h2>
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('googlenextDescription1')}</p>
    //       <img src={images.googleaijs} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('googlenextDescription2')}</p>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('googlenextDesc1')}</li>
    //         <li>{t('googlenextDesc2')}</li>
    //         <li>{t('googlenextDesc3')}</li>
    //     </ul>
    //     <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
    //     {t('agentsTabIntegrationsTitle')}
    //     </h2>
    //     <ul style={{ paddingLeft: '20px'}}>
    //       <li>{t('agentsTabIntegrations1')}</li>
    //       <li>{t('agentsTabIntegrations2')}</li>
    //       <li>{t('agentsTabIntegrations3')}</li>
    //       <li>{t('agentsTabIntegrations4')}</li>
    //       <li>{t('agentsTabIntegrations5')}</li>
    //     </ul>
    //     <a href="/contact" className="Btn">{t('cta_agent')}</a>
    //     </div>
    //   ),
    // },
    // {
    //   id: "1.2",
    //   label: "Google AI Studio Custom Assistant App at Python",
    //   content: (
    //     <div>
    //       <h2>{t('googlestreamlitTitle')}n</h2>
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('googlestreamlitDescription1')}</p>
    //       <img src={images.googleaipython} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('googlestreamlitDescription2')}</p>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('googlestreamlitDesc1')}</li>
    //         <li>{t('googlestreamlitDesc2')}</li>
    //         <li>{t('googlestreamlitDesc3')}</li>
    //     </ul>
    //     <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
    //     {t('agentsTabIntegrationsTitle')}
    //     </h2>
    //     <ul style={{ paddingLeft: '20px'}}>
    //       <li>{t('agentsTabIntegrations1')}</li>
    //       <li>{t('agentsTabIntegrations2')}</li>
    //       <li>{t('agentsTabIntegrations3')}</li>
    //       <li>{t('agentsTabIntegrations4')}</li>
    //       <li>{t('agentsTabIntegrations5')}</li>
    //     </ul>
    //     <a href="/contact" className="Btn">{t('cta_agent')}</a>
    //     </div>
    //   ),
    // },
    // {
    //   id: "2",
    //   label: "Customer Support Agent",
    //   content: (
    //     <div>
    //       <h2>{t('agentsTabSupportBotTitle')}</h2>
    //       <p style={{ marginTop: '10px' }}>{t('agentsTabSupportBotDescription1')}</p>
    //       <img src={images.mbotpress} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTabSupportBotDescription2')}</p>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsTabSupportBotDesc1')}</li>
    //         <li>{t('agentsTabSupportBotDesc2')}</li>
    //         <li>{t('agentsTabSupportBotDesc3')}</li>
    //     </ul>
    //     <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
    //       {t('agentsTabIntegrationsTitle')}
    //       </h2>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsTabIntegrations1')}</li>
    //         <li>{t('agentsTabIntegrations2')}</li>
    //         <li>{t('agentsTabIntegrations3')}</li>
    //         <li>{t('agentsTabIntegrations4')}</li>
    //         <li>{t('agentsTabIntegrations5')}</li>
    //       </ul>
    //       <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
    //       {t('agentsTabIntegrationsWho')}
    //       </h2>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsTabIntegrationsWho1')}</li>
    //         <li>{t('agentsTabIntegrationsWho2')}</li>
    //         <li>{t('agentsTabIntegrationsWho3')}</li>
    //         <li>{t('agentsTabIntegrationsWho4')}</li>
    //       </ul>
    //       <a href="/contact" className="Btn">{t('cta_agent')}</a>
    //     </div>
    //   ),
    // },
    // {
    //   id: "3",
    //   label: "Lead Gen Agent",
    //   content: (
    //     <div>
    //       <h2>{t('agentsTab3Title')}</h2>
    //       <p style={{ marginTop: '10px' }}>{t('agentsTab3Description1')}</p>
    //       <img src={images.botpressleadbot} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab3Description2')}</p>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsTab3Desc1')}</li>
    //         <li>{t('agentsTab3Desc2')}</li>
    //         <li>{t('agentsTab3Desc3')}</li>
    //     </ul>
    //     <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
    //       {t('agentsTabIntegrationsTitle')}
    //       </h2>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsTabIntegrations1')}</li>
    //         <li>{t('agentsTabIntegrations2')}</li>
    //         <li>{t('agentsTabIntegrations3')}</li>
    //         <li>{t('agentsTabIntegrations4')}</li>
    //         <li>{t('agentsTabIntegrations5')}</li>
    //       </ul>
    //       <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
    //       {t('agentsTabIntegrationsWhoe')}
    //       </h2>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsTabIntegrationsWhoe1')}</li>
    //         <li>{t('agentsTabIntegrationsWhoe2')}</li>
    //         <li>{t('agentsTabIntegrationsWhoe3')}</li>
    //         <li>{t('agentsTabIntegrationsWhoe4')}</li>
    //       </ul>
    //       <a href="/contact" className="Btn">{t('cta_agent')}</a>
    //     </div>
    //   ),
    // },
    // {
    //   id: "4",
    //   label: "AI Ecom Agent",
    //   content: (
    //     <div>
    //       <h2>{t('agentsTab5Title')}n</h2>
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab5Description1')}</p>
    //       <img src={images.mecom} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab5Description2')}</p>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsTab5Desc1')}</li>
    //         <li>{t('agentsTab5Desc2')}</li>
    //         <li>{t('agentsTab5Desc3')}</li>
    //     </ul>
    //     <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
    //     {t('agentsTabIntegrationsTitle')}
    //     </h2>
    //     <ul style={{ paddingLeft: '20px'}}>
    //       <li>{t('agentsTabIntegrations1')}</li>
    //       <li>{t('agentsTabIntegrations2')}</li>
    //       <li>{t('agentsTabIntegrations3')}</li>
    //       <li>{t('agentsTabIntegrations4')}</li>
    //       <li>{t('agentsTabIntegrations5')}</li>
    //     </ul>
    //     <a href="/contact" className="Btn">{t('cta_agent')}</a>
    //     </div>
    //   ),
    // }, 
    // {
    //   id: "5",
    //   label: "Local RAG AI Assistant",
    //   content: (
    //     <div>
    //       <h2>{t('agentsTab7Title')}n</h2>
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab7Description1')}</p>
    //       <img src={images.mollama} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab7Description2')}</p>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsTab7Desc1')}</li>
    //         <li>{t('agentsTab7Desc2')}</li>
    //         <li>{t('agentsTab7Desc3')}</li>
    //     </ul>
    //     <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
    //     {t('agentsTabIntegrationsTitle')}
    //     </h2>
    //     <ul style={{ paddingLeft: '20px'}}>
    //       <li>{t('agentsTabIntegrations1')}</li>
    //       <li>{t('agentsTabIntegrations2')}</li>
    //       <li>{t('agentsTabIntegrations3')}</li>
    //       <li>{t('agentsTabIntegrations4')}</li>
    //       <li>{t('agentsTabIntegrations5')}</li>
    //     </ul>
    //     <a href="/contact" className="Btn">{t('cta_agent')}</a>
    //     </div>
    //   ),
    // },
    // {
    //   id: "6",
    //   label: "AI Voice Support Agent",
    //   content: (
    //     <div>
    //       <h2>{t('agentsTab2Title')}</h2>
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab2Description1')}</p>
    //       <img src={images.mockupvoicebot} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }}/>
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab2Description2')}</p>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsTab2Desc1')}</li>
    //         <li>{t('agentsTab2Desc2')}</li>
    //         <li>{t('agentsTab2Desc3')}</li>
    //         <li>{t('agentsTab2Desc4')}</li>
    //     </ul>
    //     <a href="/contact" className="Btn">{t('cta_agent')}</a>
    //     </div>
    //   ),
    // },
    // {
    //   id: "7",
    //   label: "Huggingface",
    //   content: (
    //     <div>
    //       <h2 style={{ marginBottom: '30px' }}>
    //       {t('agentsTab1Title')}
    //       </h2>
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab1Description1')}</p>
    //       <img src={images.hfassistantsapp} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsTab1Desc1')}</li>
    //         <li>{t('agentsTab1Desc2')}</li>
    //         <li>{t('agentsTab1Desc3')}</li>
    //       </ul>
    //       <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
    //       {t('agentsTabIntegrationsTitle')}
    //       </h2>
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsTabIntegrations1')}</li>
    //         <li>{t('agentsTabIntegrations2')}</li>
    //         <li>{t('agentsTabIntegrations3')}</li>
    //         <li>{t('agentsTabIntegrations4')}</li>
    //         <li>{t('agentsTabIntegrations5')}</li>
    //       </ul>
    //       <a href="/contact" className="Btn">{t('cta_agent')}</a>
    //     </div>
    //   ),
    // },
   
    // {
    //   id: "8",
    //   label: "Google AI Studio",
    //   content: (
    //     <div>
    //       <h2>{t('agentsTab4Title')}</h2>
    //       <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab4Description1')}</p>
    //       <img src={images.googleassistants} className="app_tab-img" alt="profile_bg" style={{ marginBottom: '30px', borderRadius:'20px' }} />
    //       <ul style={{ paddingLeft: '20px'}}>
    //         <li>{t('agentsTab4Desc1')}</li>
    //         <li>{t('agentsTab4Desc2')}</li>
    //         <li>{t('agentsTab4Desc3')}</li>
    //     </ul>
    //     <a href="/contact" className="Btn">{t('cta_agent')}</a>

    //     </div>
    //   ),
    // },
    //   {
    //     id: "9",
    //     label: "Custom AI Agent in Next.js",
    //     content: (
    //       <div>
    //         <h2>{t('agentsTab6Title')}n</h2>
    //         <p style={{marginBottom: '20px', marginTop: '10px' }}>{t('agentsTab6Description1')}</p>
    //         <img src={images.mwrapper} className="app_tab-img" alt="profile_bg" style={{ maxWidth: '700px', marginBottom: '30px', borderRadius:'20px' }} />
    //         <ul style={{ paddingLeft: '20px'}}>
    //           <li>{t('agentsTab6Desc1')}</li>
    //           <li>{t('agentsTab6Desc2')}</li>
    //           <li>{t('agentsTab6Desc3')}</li>
    //           <li>{t('agentsTab6Desc4')}</li>
    //       </ul>
    //       <a href="/contact" className="Btn">{t('cta_agent')}</a>
    //       </div>
    //     ),
    //   },
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
