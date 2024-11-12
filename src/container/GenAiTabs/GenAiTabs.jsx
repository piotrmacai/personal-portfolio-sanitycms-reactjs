import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './GenAiTabs.scss';
import { GenAiTabsData } from './GenAiTabsData';
import { useTranslation } from 'react-i18next';

const GenAiTabs = () => {
  const [skills, setSkills] = useState([]);
  const [selectedTab, setSelectedTab] = useState("1"); // State to track the selected tab
  const tabs = GenAiTabsData();
  const { t } = useTranslation();

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(skillsQuery).then((data) => setSkills(data));
  }, []);

  return (
    <div className="app__agenttabs-container">
      <h2 className="genai-header">{t('genaiTabHeader')}</h2>

      <div className="app__documentation-container">
        {/* Sidebar with tabs */}
        <div className="app__tabs-sidebar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`app__tab-button ${selectedTab === tab.id ? 'active' : ''}`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area for the selected tab */}
        <motion.div 
          className="app__tab-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          {tabs.find(tab => tab.id === selectedTab)?.content || "Select a tab to view content"}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(GenAiTabs, 'app__genaitabs'),
  'genaitabs',
  "app__whitebg"
);






// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
// import './AgentTabs.scss';
// import { useTranslation } from "react-i18next";

// const AgentTabs = () => {
//   const { t } = useTranslation();
  
//   const [skills, setSkills] = useState([]);
//   const [selectedTab, setSelectedTab] = useState("overview"); // State to track the selected tab

//   useEffect(() => {
//     const skillsQuery = '*[_type == "skills"]';
//     client.fetch(skillsQuery).then((data) => setSkills(data));
//   }, []);

//   // Define your documentation tabs and content
//   const tabs = [
//     { id: "overview", label: t('Overview'), content: t('Overview content goes here.') },
//     { id: "setup", label: t('Setup'), content: t('Setup instructions content goes here.') },
//     { id: "usage", label: t('Usage'), content: t('Usage guidelines and examples content goes here.') },
//     { id: "api", label: t('API Reference'), content: t('API reference and methods content goes here.') },
//     // Add more tabs as needed
//   ];

//   return (
//     <div className="app__agenttabs-container">
//       <h2 className="head-text">{t('Documentation')}</h2>

//       <div className="app__documentation-container">
//         {/* Left sidebar with tabs */}
//         <div className="app__tabs-sidebar">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               className={`app__tab-button ${selectedTab === tab.id ? 'active' : ''}`}
//               onClick={() => setSelectedTab(tab.id)}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Right content area */}
//         <motion.div 
//           className="app__tab-content"
//           key={selectedTab}
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {tabs.find(tab => tab.id === selectedTab)?.content || t('Select a tab to view content')}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AppWrap(
//   MotionWrap(AgentTabs, 'app__agenttabs'),
//   'agenttabs',
//   "app__whitebg"
// );
