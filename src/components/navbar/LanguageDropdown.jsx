import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const fr = "/flags/fr.png";
  const en = "/flags/en.png";

  // Fonction de changement de langue
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang; // SEO/accessibilité
    setLang(i18n.language === "fr" ? fr : en);
    setIsOpen(!isOpen);
  };

  // Détection du drapeau à afficher

  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState(en);

  function ChangeFlag() {
    setLang(i18n.language === "fr" ? fr : en);
  }
  function ChangeOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      style={{
        gap: 8,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px 8px",
        display: "inline-block",
      }}
    >
      <button onClick={() => ChangeOpen()}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src={lang}
            alt={i18n.language === "fr" ? "Français" : "English"}
            style={{ width: 28, height: 28 }}
          />

          <span style={{ fontSize: "20px", color: "#fff" }}>▼</span>
        </div>
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: 80,
            backgroundColor: "transparent",
            border: "1px solid transparent ",
            borderRadius: 4,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: 8,
            zIndex: 1000,
          }}
        >
          <button onClick={() => toggleLanguage()}>
            <img
              src={i18n.language === "fr" ? en : fr}
              alt={i18n.language === "fr" ? "Français" : "English"}
              style={{ width: 28, height: 28 }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
