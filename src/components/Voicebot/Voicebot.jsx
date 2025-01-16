import React, { useEffect } from 'react';
import './voicebot.scss';

const Voicebot = () => {
  useEffect(() => {
    // Create the script element for ElevenLabs
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Create the voicebot element
    const voicebot = document.createElement('elevenlabs-convai');
    voicebot.setAttribute('agent-id', 'YrxJMbF79TmVMiPciQ7B');
    voicebot.style.marginBottom = '90px'; 
    document.getElementById('voicebot-container').appendChild(voicebot);

    return () => {
      document.body.removeChild(script);
      const container = document.getElementById('voicebot-container');
      if (container && container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return <div id="voicebot-container" className="voicebotcontainer" style={{ marginTop: '50px !important' }}/>;
};

export default Voicebot;