import React, { useEffect } from 'react';
import './chatbot.scss';

const Chatbot = () => {

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2024/10/18/09/20241018090808-B2VMOI0Y.js';
    script2.defer = true;
    document.body.appendChild(script2);
 
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  <div className="webchat-wrapper">
    <div id="webchat" style={{ marginBottom: '50px !important' }}/>
  </div>

};

export default Chatbot;




// import React, { useEffect } from 'react';

// const Chatbot = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
    
//     script.type = 'text/javascript';
    
//     script.onload = function() {
//       window.voiceflow.chat.load({
//         verify: { projectID: '655ca1fc06559d0007477401' },
//         url: 'https://general-runtime.voiceflow.com',
//         versionID: 'production'
//       });
//     };

//     script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return <div />;
// };

// export default Chatbot;



// import React, { useEffect } from 'react';

// function Chatbot() {
//   useEffect(() => {
//     const script1 = document.createElement('script');
//     script1.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
//     script1.async = true;
//     document.body.appendChild(script1);

//     const script2 = document.createElement('script');
//     script2.src = 'https://mediafiles.botpress.cloud/7c35a192-9eda-49df-9c25-ea422d0a47ce/webchat/config.js';
//     script2.defer = true;
//     document.body.appendChild(script2);

//     return () => {
//       document.body.removeChild(script1);
//       document.body.removeChild(script2);
//     };
//   }, []);

//   return <div id="webchat" />;
// }

// export default Chatbot;
