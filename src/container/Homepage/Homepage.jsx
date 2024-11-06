import React from 'react';
import { About, Footer, Header,  Pricing, Work, Skills, Cta, Slider, AgentTabs, Publication} from '../';

const Homepage = () => {
  return (
    <>
      <Header /> 
      <Cta/>
      {/* <Publication />           */}
      <Slider/>
      <Work/>
      <About />
      <AgentTabs/>
      <Skills/>
      <Pricing />
      <Footer />
    </>
  );
};

export default Homepage;