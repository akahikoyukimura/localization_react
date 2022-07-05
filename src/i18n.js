import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';



i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ar', 'fr'],
    fallbackLng: 'en',
    detection: {
      order: ["path", "cookie", "htmlTag","path"],
      caches: ["cookie"],
    },
    backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json',
      },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
