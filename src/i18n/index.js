import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import uk from "./uk.json";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uk: { translation: uk },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
