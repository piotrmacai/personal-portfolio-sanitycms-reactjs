import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select value={i18n.language} onChange={handleChangeLanguage} className="switcherButtonContainer">
       <option value="pl" className="switcherOption">PL</option>
       <option value="en" className="switcherOption">EN</option>
    </select>
  );
};

export default LanguageSwitcher;