import React, { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./FeaturesTabs.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from '../../wrapper';

const FeaturesTab = () => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState("tabOne");

  // Generate featuresTabData dynamically to ensure `t` is invoked properly
  const featuresTabData = [
    {
      id: "tabOne",
      title: t("cta_talk") || "Feature One",
      desc1: t("feature_one_desc1") || "Description for feature one.",
      desc2: t("feature_one_desc2") || "Additional details about feature one.",
      image: images.deviceHead4,
      number:  "1",
    },
    {
      id: "tabTwo",
      title: t("feature_two_title") || "Feature Two",
      desc1: t("feature_two_desc1") || "Description for feature two.",
      desc2: t("feature_two_desc2") || "Additional details about feature two.",
      image: images.deviceHead3,
      number:  "2",
    },
    {
      id: "tabThree",
      title: t("feature_three_title") || "Feature Three",
      desc1: t("feature_three_desc1") || "Description for feature three.",
      desc2: t("feature_three_desc2") || "Additional details about feature three.",
      image: images.computerHead,
      number:  "3",
    },
  ];

  return (
    <section className="features-tabs">
      <div className="features-tabs__container">
        <div className="features-tabs__header"></div>

        {/* Tab Menus */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="features-tabs__menu"
        >
          {featuresTabData.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setCurrentTab(feature.id)}
              className={`features-tabs__menu-item ${
                currentTab === feature.id ? "active" : ""
              }`}
            >
              <div className="features-tabs__menu-icon">
                <p className="p-text">
                  {feature.number}
                </p>
              </div>
              <h5 className="features-tabs__menu-title">{feature.title}</h5>
            </div>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="features-tabs__content"
        >
          {featuresTabData.map((feature) =>
            currentTab === feature.id ? (
              <FeaturesTabItem featureTab={feature} key={feature.id} />
            ) : null
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(FeaturesTab, 'app__cta'), 'cta', 'app__whitebg');

