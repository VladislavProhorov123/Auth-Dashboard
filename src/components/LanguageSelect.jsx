import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "uk", label: "Українська", flag: "🇺🇦" },
  ];

  const current =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2
          px-3 py-2
          bg-white
          border border-gray-200
          rounded-xl
          shadow-sm
          hover:bg-gray-50
          transition cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span>{current.flag}</span>
        <span className="font-medium">{current.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-full
            bg-white
            border border-gray-200
            rounded-xl
            shadow-lg
            overflow-hidden
            z-50">
              {languages.map((lang) => (
                <button className="w-full flex items-center gap-2
                px-2 py-2
                hover:bg-blue-50
                text-left
                transition" key={lang.code} onClick={() => changeLang(lang.code)}>
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
      )}
    </div>
  );
}
