import React from 'react';
import Chatbot from '../Chatbot/Chatbot';
import Voicebot from '../Voicebot/Voicebot';
import './combinedbots.scss';

const CombinedBots = () => {
  return (
    <div className="container fixed right-4 bottom-4 flex flex-col items-end gap-4 z-50">
      <div style={{ marginBottom: '100px' }} className="webchatwrapper">
        <Chatbot />
      </div>
      <div> 
        <Voicebot />
      </div>
    </div>
  );
};

export default CombinedBots;