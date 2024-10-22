import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar, Contact, Chatbot, Projects } from './components';
import './App.scss';
import {Homepage} from './container';
import HttpsRedirect from 'react-https-redirect';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {
 
  return (
    <div className="app">
      <HttpsRedirect>
      
      <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects/>} />
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

