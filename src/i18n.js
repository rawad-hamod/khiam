import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import BackEnd from "i18next-http-backend";
import translationAR from "./locale/translationAR";
import translationEN from "./locale/translationEN";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(BackEnd)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: { translation: translationEN },
      ar: { translation: translationAR },
    },
  });
