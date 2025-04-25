import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button id='language-switcher' onClick={toggleLanguage}>
      {i18n.language === 'en' ? 'PT' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
