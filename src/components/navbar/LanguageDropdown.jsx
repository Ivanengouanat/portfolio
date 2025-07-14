import React, { useState } from "react";

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (lang) => {
    if (lang === "fr") {
      document.documentElement.lang = "fr";
      window.location.reload(); // Chrome proposera la traduction automatique
    }
    setOpen(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Bouton principal (🇬🇧 par défaut) */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <img
          src="/flags/en.png"
          alt="English"
          style={{ width: 32, height: 32 }}
        />
      </button>

      {/* Menu déroulant */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: 40,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: 4,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: 8,
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => handleClick("fr")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <img
              src="/flags/fr.png"
              alt="Français"
              style={{ width: 32, height: 32 }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
