import React from 'react';
import { About, Footer, Header,  Pricing, Work, Skills, Cta, Slider, AgentTabs, ResourcesTabs, Publication, GridPortfolio, FeaturesTab} from '../';
import './Homepage.scss';

const Homepage = () => {
  return (
    <>
      <Header />    
      <Cta/> 
      <Slider/>  
      <About /> 
      <FeaturesTab/>   
      <GridPortfolio/>  
      {/* <Publication />           */}
      {/* <Work/>      */}
      <div className="hide-on-mobile">
        <ResourcesTabs/>
      </div>
    
      <Skills/>
      <Pricing />
      <Footer />
    </>
  );
};

export default Homepage;