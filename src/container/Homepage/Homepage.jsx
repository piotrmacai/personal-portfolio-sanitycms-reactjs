import React from 'react';
import { About, Footer, Header, HeadingWeb, Pricing, Work, Skills, Cta, SliderAgents, SliderWeb, SliderDesign, Slider, AgentTabs, ResourcesTabs, Publication, GridPortfolio, FeaturesTab} from '../';
import './Homepage.scss';

const Homepage = () => {
  return (
    <>
      <Header />  
  
      {/* <Slider/>    */}
       <Cta/> 
      <About /> 
      <SliderDesign/>
      <SliderWeb/>
       <SliderAgents/>
      <FeaturesTab/>   
      {/* <Publication />           */}
      {/* <Work/>      */}
      <div className="hide-on-mobile">
        <ResourcesTabs/>
      </div>
        {/* <GridPortfolio/>   */}
      <Skills/>
      <Pricing />
      <Footer />
    </>
  );
};

export default Homepage;