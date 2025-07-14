import { useTranslation } from "react-i18next";

const ContactText = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-orange text-3xl mb-4">{t("contact.title")}</h2>
      <p>
        {t("contact.message1")}
        <br />
        {t("contact.message2")}
      </p>
    </div>
  );
};

export default ContactText;
