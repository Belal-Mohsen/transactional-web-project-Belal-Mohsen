import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('fr')}>FR</button> | <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
}

export default LanguageSwitcher;