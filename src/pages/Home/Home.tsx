import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('pages.welcome')}</h1>
      <p>{t('select_option')}</p>
    </div>
  );
}

export default Home;