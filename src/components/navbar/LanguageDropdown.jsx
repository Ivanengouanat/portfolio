import React from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  // Fonction de changement de langue
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang; // SEO/accessibilité
  };

  // Détection du drapeau à afficher
  const currentFlag =
    i18n.language === "fr" ? "/flags/fr.png" : "/flags/en.png";

  return (
    <button
      onClick={toggleLanguage}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px 8px",
      }}
    >
      <img
        src={currentFlag}
        alt={i18n.language === "fr" ? "Français" : "English"}
        style={{ width: 28, height: 28 }}
      />
      <FaChevronDown style={{ fontSize: 16, color: "#fff" }} />
    </button>
  );
};

export default LanguageDropdown;
