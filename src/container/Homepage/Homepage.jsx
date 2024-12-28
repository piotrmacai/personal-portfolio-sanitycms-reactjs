import React from 'react';
import { About, Footer, Header, HeadingWeb, Pricing, Work, Skills, Cta, SliderAgents, SliderWeb, SliderDesign, Slider, AgentTabs, ResourcesTabs, Publication, GridPortfolio, FeaturesTab} from '../';
import './Homepage.scss';

const Homepage = () => {
  return (
    <>
      <Header />     
      <About />    
       <Cta/> 
       <SliderAgents/> 
      <SliderWeb/>
      <SliderDesign/>
      <FeaturesTab/>   
      {/* <Work/>      */}
      <div className="hide-on-mobile">
        <ResourcesTabs/>
      </div>      
      {/* <Publication />           */}
        {/* <GridPortfolio/>   */}
      <Skills/>
      <Pricing />
      <Footer />
    </>
  );
};

export default Homepage;