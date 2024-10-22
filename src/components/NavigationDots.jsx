import React from 'react'

const NavigationDots = ({ active }) => (
    <div className="app__navigation">
      {['home','cta',  'publication',  'slider', 'about', 'skills', 'pricing', ].map((item, index) => (
        // eslint-disable-next-line
        <a href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        /> 
      ))}
    </div>
  );
  
  export default NavigationDots;