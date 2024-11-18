import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { useTranslation } from "react-i18next";
import About from "./components/About/About";
import Clean from "./components/Clean/Clean";
import Services from "./components/Services/Services";
import ServiceType from "./components/ServiceType/ServiceType";
import Official from "./components/Official/Official";
import Connection from "./components/Connection/Connection";
import FAQ from "./components/Faq/Faq";
import { FaPhoneAlt } from "react-icons/fa";

function App() {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng") || "uz"; 
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <Header laungage={language} handleChange={handleChange} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Clean t={t} />
      <Services t={t} />
      <ServiceType t={t} />
      <Official t={t} />
      <FAQ t={t} />
      <Connection t={t} />
      <Footer t={t} />

      <div className="telegram">
        <a
          className="telegram__icon"
          href="https://t.me/Shamsiddin_69_75"
          aria-label={t("telegram__link")} 
          target="_blank"
          rel="noopener noreferrer" 
        >
          <FaPhoneAlt />
          <div className="telegram__ring"></div>
        </a>
      </div>
    </>
  );
}

export default App;
