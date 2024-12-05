import React from "react";
import "./FeaturesTabItem.scss"; // Import the SCSS file

const FeaturesTabItem = ({ featureTab }) => {
  const { title, desc1, desc2, image, number } = featureTab;

  return (
    <div className="features-tab-item">
      <div className="features-tab-item__container">
        <div className="features-tab-item__image">
          <img src={image} alt={title} className="features-tab-item__img" />
        </div>
        <div className="features-tab-item__content">
          <h3 className="features-tab_h2">{title}</h3>
          <p className="features-tab_p">{desc1}</p>
          <p className="p-text">{desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTabItem;

