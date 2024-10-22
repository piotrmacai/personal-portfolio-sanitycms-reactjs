import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import en from './locales/en.json';
import translationEN from './locales/en.json';
// import pl from './locales/pl.json';
import translationPL from './locales/pl.json';

const resources = {
    en: { translation: translationEN },
    pl: { translation: translationPL },
  };

  i18n
  .use(LanguageDetector) // add language detector
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "pl",
    interpolation: { escapeValue: false },
  });

export default i18n;

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     debug: true,
//     fallbackLng: 'en',
//     resources: {
//       en: {
//         translation: en,
//       },
//       pl: {
//         translation: pl,
//       },
//     },
//   });

// export default i18n;