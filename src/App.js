import {React, useEffect} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar, Contact, Chatbot, Projects, Assistants } from './components';
import './App.scss';
import {Homepage} from './container';
import HttpsRedirect from 'react-https-redirect';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {
  useEffect(() => {
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-3LC66YL36N";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-3LC66YL36N');
  }, []); // Empty dependency array ensures this runs only once
  return (
    <div className="app">
      <HttpsRedirect>
      
      <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/assistants" element={<Assistants/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </I18nextProvider>
      </BrowserRouter> 
       <Chatbot/>
      </HttpsRedirect>
    </div>
  );
};

export default App;

