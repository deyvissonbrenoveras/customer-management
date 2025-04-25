import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json';
import ptTranslation from './pt.json';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
    },
    fallbackLng: 'pt', 
    interpolation: {
      escapeValue: false, 
    },
    lng: 'pt', 
  });

export default i18n;
