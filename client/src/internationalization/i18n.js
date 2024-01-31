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

          yourQuestionAnswered:"Your questions, answered",
          howItWorsLabel:"How it Works",
          billingShippingLabel:"Billing & Shipping",
          whatIsUnboxHolidaysText:"Welcome to Unbox Holidays! We curate and deliver decorations for the holidays and seasons you love—whether they’re for your home,vacation home, or business!",
          whatIsUnboxHolidaysTitle: "What is Unbox Holidays?",
          whatIsUnboxHolidaysTextEnding:"Our goal is to find the most on-trend, quality decorations and festive items— that you would otherwise have to purchase from several different stores— and bring them all to one convenient location: your box! It is our mission to surprise, inspire and help you prepare for the holiday—however that looks for you—so that you can stress less and festive more!",
          howManyHolidaysTitle:"How many holidays/seasons do you offer? How much is each box?",
          howManyHolidaysTextBeginning:"We offer boxes for 4 seasons and 10 holidays",
          howManyHolidaysTextSeasons:"SEASONS: Spring, Summer, Fall, Winter", 
          howManyHolidaysTextHolidays:"HOLIDAYS: Valentine’s Day, St. Patrick’s Day, Easter Monday, Saint Jean Baptiste Day, Canada, Thanksgiving, Halloween, Christmas, New Year’s Eve",
          howDoesItWorkTitle:"How does it work? Do I get to choose what comes in my boxes?",
          howDoesItWorkText:"To start, you will take a simple 4-question Style Quiz to curate your decor style.Then, we will select the perfect products for you!",
          howDoesPaymentWorkitle:"How does payment work?",
          howDoesPaymentWorkText:"Our convenient, flexible “Pay As You Go” billing option means you will be billed at the time that you choose/reserve your box for each holiday/season on your plan.  Your Unbox Holidays box subscriptions automatically renew each year. You can add or skip/cancel a box at any time in My Account.",
          howMuchIsShippingTitle:"How much is shipping?",
          howMuchIsShippingTextBeginning:"Shipping is a flat rate of $12 for box.",
          howMuchIsShippingTextEnd:"We are a small business and while we wish we could cover the cost of shipping, it is simply not possible for us to do so and remain in business. Thank you for your understanding!",
          whenWillMyBoxShipTitle:"When will my box ship?",
          whenWillMyBoxShipText:"Please reference the CALENDAR Page for all of these important dates!",
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

          yourQuestionAnswered:"Vos questions, réponses",
          howItWorsLabel:"Comment ça fonctionne",
          billingShippingLabel:"Facturation et expédition",
          whatIsUnboxHolidaysText:"Bienvenue sur Unbox Holidays ! Nous préparons et livrons des décorations pour les vacances et les saisons que vous aimez, qu'elles soient pour votre maison, votre maison de vacances ou votre entreprise !",
          whatIsUnboxHolidaysTitle: "Qu’est-ce qu’Unbox Holidays ?",
          whatIsUnboxHolidaysTextEnding:"Notre objectif est de trouver les décorations et les articles festifs les plus tendance et de qualité que vous auriez autrement dû acheter dans plusieurs magasins différents et de les amener tous dans un seul endroit pratique : votre boîte ! Notre mission est de vous surprendre, de vous inspirer et de vous aider à préparer les vacances, peu importe ce qui vous convient, afin que vous puissiez moins stresser et festif en plus !",
          howManyHolidaysTitle:"Combien de vacances/saisons proposez-vous ? Combien coûte chaque boîte ?",
          howManyHolidaysTextBeginning:"Nous proposons des coffrets pour 4 saisons et 10 vacances",
          howManyHolidaysTextSeasons:"SAISONS : Printemps, Été, Automne, Hiver", 
          howManyHolidaysTextHolidays:"JOURS FÉRIÉS : Saint-Valentin, Saint-Patrick, Lundi de Pâques, Saint-Jean-Baptiste, Canada, Action de grâces, Halloween, Noël, Réveillon du Nouvel An",
          howDoesItWorkTitle:"Comment ça marche? Est-ce que je peux choisir ce qui entre dans mes cartons ?",
          howDoesItWorkText:"Pour commencer, vous répondrez à un simple quiz de style en 4 questions pour définir votre style de décoration. Ensuite, nous sélectionnerons les produits parfaits pour vous !",
          howDoesPaymentWorkitle:"Comment fonctionne le paiement ?",
          howDoesPaymentWorkText:"Notre option de facturation pratique et flexible « Pay As You Go » signifie que vous serez facturé au moment où vous choisissez/réservez votre box pour chaque vacances/saison de votre forfait. Vos abonnements à la box Unbox Holidays se renouvellent automatiquement chaque année. Vous pouvez ajouter ou sauter/annuler une case à tout moment dans Mon compte.",
          howMuchIsShippingTitle:"Combien coûte l'expédition ?",
          howMuchIsShippingTextBeginning:"Les frais d'expédition sont forfaitaires de 12 $ par boîte.",
          howMuchIsShippingTextEnd:"Nous sommes une petite entreprise et même si nous souhaitons pouvoir couvrir les frais d’expédition, il nous est tout simplement impossible de le faire et de rester en activité. Merci pour votre compréhension!",
          whenWillMyBoxShipTitle:"Quand ma boîte sera-t-elle expédiée ?",
          whenWillMyBoxShipText:"Veuillez consulter la page CALENDRIER pour toutes ces dates importantes !",

        
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