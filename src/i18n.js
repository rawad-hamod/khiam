import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import BackEnd from "i18next-http-backend";
import translationAR from "./locale/translationAR";
import translationEN from "./locale/translationEN";
import homeEN from "./locale/homeEN";
import homeAR from "./locale/homeAR";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(BackEnd)
  .init({
    debug: true,
    returnObject:true,
   
    fallbackLng: localStorage.getItem("i18nextLng")===null?"en":localStorage.getItem("i18nextLng"),
    detection:{
order:["queryString","cookie"],
cashe:["cookie","htmlTag","localStorage"],
    },
    returnObjects: true,
    resources: {
      en: { translation: translationEN , homeEN},
      ar: { translation: translationAR , homeAR},
    },
  });
