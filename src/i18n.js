// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locale/en/trans.json';
import thTranslation from './locale/th/trans.json';

i18n.use(initReactI18next).init({
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Fallback language in case translation is missing
  resources: {
    en: {
      translation: enTranslation
    },
    th: {
      translation: thTranslation
    }
  }
});

export default i18n;
