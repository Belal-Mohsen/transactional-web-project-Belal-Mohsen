import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // English translations go here
          topBannerMessage: "Unwrap the Joy: Exclusive Holiday Deals Inside!",
          homeButton: "Home",
          subscribeButton: "Subscribe",
          faqButton: "FAQ",
          calendarButton: "Calendar",
          contactUsButton: "Contact Us",
        },
      },
      fr: {
        translation: {
          // French translations go here
          topBannerMessage: "Déballez la joie : offres de vacances exclusives à l'intérieur !",
          homeButton: "Home",
          subscribeButton: "S'abonner",
          faqButton: "FAQ",
          calendarButton: "Calendrier",
          contactUsButton: "Contactez-nous",
        },
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;