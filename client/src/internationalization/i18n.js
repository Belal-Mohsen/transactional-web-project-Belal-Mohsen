import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // English translations go here
          businessName: "Unbox Holidays",
          topBannerMessage: "Unwrap the Joy: Exclusive Holiday Deals Inside!",

          bannerTitle: "Unbox Joy, Unbox Fun, Unbox Holidays!",
          bannerSubTitle: "Celebrate the Seasons with Surprise!",
          discoverNowBannerButton: "Discover Now",

          homeButton: "Home",
          subscribeButton: "Subscribe",
          faqButton: "FAQ",
          calendarButton: "Calendar",
          contactUsButton: "Contact Us",

          whatsHotTitle: "WHAT'S HOT",
          getStartedLink: "GET STARTED",
          fromPriceLabel: "from",
          howItWorksTitle: "How It Works", 
          faqTextButton: "FREQUENTLY ASKED QUESTION",

          imageCarouselTitlePrevious: "Previous",
          imageCarouselTitleBoxes: "Boxes",
          christmasBoxProductName: "Christmas Box", 
          newYearBoxProductName: "New Year Box", 
          valentineBoxProductName: "Valentine Box", 

          howItWorksBuildYourPlanTitle: "Build your plan",
          howItWorksBuildYourPlanText: "Choose your holidays, select your box sizes for each, and define your payment preference.",
          howItWorksPersonalizeTitle: "Personalize your decor",
          howItWorksPersonalizeText: "Choose your favorite theme + decor for each holiday on your subscription.",
          howItWorksEnjoyTitle: "Enjoy your Pack!",
          howItWorksEnjoyText: "Voila! Receive your box and add, upgrade, skip or cancel at any time.",

          ourStoryTitle: "Our Story",
          ourStoryTextBeginning: "Founded by Chelsea, ",
          ourStoryTextEndOfFirstParagraph: "is inspired by a childhood filled with joyous family holiday celebrations. Each year, my large family would gather to decorate our home, creating memories that have lasted a lifetime. These moments of togetherness and festivity are at the heart of our business.",
          ourStorySecondParagraphBeginning: "At ",
          ourStorySecondParagraphEnding: ", we aim to share this joy through our holiday decoration blind boxes. Each box is a collection of happiness, a way to bring families together just as mine came together. We believe in making every celebration special and memorable.",
          ourStoryThirdParagraph: "Join us in spreading the joy of holidays and creating new traditions, one decoration at a time.",

          signUpUpdatesTitle: "SIGN UP FOR FESTIVE UPDATES.",
          signUpUpdatesEmail: "Email",
          signUpUpdatesSubmitButton: "SUBMIT",

          footerMessage: "© UnboxHolidays 2024 | Privacy Policy | Terms of Use",
        },
      },
      fr: {
        translation: {
          // French translations go here
          businessName: "Unbox Holidays",
          topBannerMessage: "Déballez la joie : offres de vacances exclusives à l'intérieur !",
          
          bannerTitle: "Déballez la joie, déballez le plaisir, déballez les vacances !",
          bannerSubTitle: "Célébrez les saisons avec Surprise !",
          discoverNowBannerButton: "Découvrez maintenant",

          homeButton: "Home",
          subscribeButton: "S'abonner",
          faqButton: "FAQ",
          calendarButton: "Calendrier",
          contactUsButton: "Contactez-nous",

          whatsHotTitle: "Offres du jour",
          getStartedLink: "COMMENCER",
          fromPriceLabel: "de",
          howItWorksTitle: "Comment ça fonctionne", 
          faqTextButton: "QUESTION FRÉQUEMMENT POSÉE",

          imageCarouselTitlePrevious: "Boîtes",
          imageCarouselTitleBoxes: "précédentes",
          christmasBoxProductName: "Boîte de Noël", 
          newYearBoxProductName: "Boîte du nouvel an", 
          valentineBoxProductName: "Boîte Saint-Valentin", 
          
          howItWorksBuildYourPlanTitle: "Construisez votre plan",
          howItWorksBuildYourPlanText: "Choisissez vos vacances, sélectionnez la taille de vos boîtes pour chacune et définissez vos préférences de paiement.",
          howItWorksPersonalizeTitle: "Personnalisez votre décoration",
          howItWorksPersonalizeText: "Choisissez votre thème + décor préféré pour chaque fête compris dans votre abonnement.",
          howItWorksEnjoyTitle: "Profitez de votre pack !",
          howItWorksEnjoyText: "Voilà ! Recevez votre box et ajoutez, mettez à niveau, sautez ou annulez à tout moment.",

          ourStoryTitle: "Notre histoire",
          ourStoryTextBeginning: "Fondée par Chelsea, ",
          ourStoryTextEndOfFirstParagraph: "s'inspire d'une enfance remplie de joyeuses fêtes de famille. Chaque année, ma grande famille se réunissait pour décorer notre maison, créant ainsi des souvenirs qui dureraient toute une vie. Ces moments de convivialité et de festivité sont au cœur de notre métier.",
          ourStorySecondParagraphBeginning: "Chez ",
          ourStorySecondParagraphEnding: ", nous visons à partager cette joie à travers nos boîtes aveugles de décoration de vacances. Chaque coffret est une collection de bonheur, une façon de rassembler les familles tout comme la mienne s'est réunie. Nous croyons qu'il faut rendre chaque célébration spéciale et mémorable.",
          ourStoryThirdParagraph: "Rejoignez-nous pour répandre la joie des vacances et créer de nouvelles traditions, une décoration à la fois.",

          signUpUpdatesTitle: "INSCRIVEZ-VOUS AUX MISES À JOUR FESTIVES.",
          signUpUpdatesEmail: "Courriel",
          signUpUpdatesSubmitButton: "SOUMETTRE",

          footerMessage: "© UnboxHolidays 2024 | Politique de confidentialité | Conditions d'utilisation",

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