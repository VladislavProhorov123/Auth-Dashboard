import { LogOut, Search } from "lucide-react";
import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";

export default function Header() {
  const { session, signOut } = UserAuth();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error.message);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#0000FF"],
    });
  }, []);

  console.log(session);

  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-800 font-semibold text-lg">
        <div className="flex items-center gap-6">
          <p>
            {t("welcome")}, {session?.user?.email}!
          </p>
          <LanguageSelect />
        </div>
      </div>

      <div className="flex items-center bg-gray-100 rounded-full w-1/3 max-w-md">
        <Search className="ml-3 text-gray-500" />
        <input
          type="text"
          placeholder={t("search")}
          className="bg-transparent outline-none w-full text-gray-600 placeholder-gray-400 py-2 px-4"
        />
      </div>

      <div className="">
        <button
          onClick={handleSignOut}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 min-w-[120px] whitespace-nowrap flex-shrink-0 py-2 rounded-lg font-medium transition cursor-pointer"
        >
          <LogOut className="w-4 h-4 mr-2 " />
          {t("signOut")}
        </button>
      </div>
    </div>
  );
}
