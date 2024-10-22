import React, { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useTranslation } from 'react-i18next';
import './Counter.scss';
import { MdOutlineDesignServices } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import { BiCodeBlock } from 'react-icons/bi';

function Counter({ endValue, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < endValue) {
        setCount(count + 1);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [count, endValue]);

  return (
    <div className="counter">
      <h2 className="counter_h2">{count}</h2>
      <p className="counter_p">{label}</p>
    </div>
  );
}

function Counters() {
  const { t } = useTranslation();
  return (
    <div className="counterContainer">

              <div className="counterContainer_info">
                    <p className="counter_p"> {t('counter_subtitle1')}</p>
                    <h2 data-aos="zoom-in" className="counter_h2">
                    {t('counter_title1')}
                    </h2>
                    <p className="counter_p">{t('counter_desc1')}</p>
                </div>


        <div className="counterContainerApp">
                      <div className="counterContainerAppCard">
                        <MdOutlineDesignServices className="about__icon" />
                        <Counter endValue={10} label="Clients" />
                        {/* <h5>{t('team_CardTitle1')} </h5>
                        <small> {t('team_CardDesc1')} </small> */}
                      </div>
                    
                      <div className="counterContainerAppCard">
                          <FaAward className="about__icon" />
                          <Counter endValue={15} label="k Earned" />
                          {/* <h5>{t('team_CardTitle2')} </h5>
                          <small> {t('team_CardDesc2')} </small> */}
                      </div>

                      <div className="counterContainerAppCard">
                          <BiCodeBlock className="about__icon" />
                          <Counter endValue={3} label="Team" />
                      </div>

                      <div className="counterContainerAppCard">
                          <BiCodeBlock className="about__icon" />
                          <Counter endValue={12} label="Created Apps" />
                      </div>
            {/* <Counter endValue={10} label="Clients" />
            <Counter endValue={15} label="k Earned" />
            <Counter endValue={3} label="Team" /> */}
        </div>
    </div>
  );
}

// export default CountersRow;
export default AppWrap(MotionWrap(Counters, 'app__counters'), 'counters', 'app__whitebg');