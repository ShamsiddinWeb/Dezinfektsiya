import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { useTranslation } from "react-i18next";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import SwiperComp from "./components/Swiper/Swiper";
import TypeServices from "./components/TypeServices/TypeServices";
import ScrollingText from "./components/ScrollingText/ScrollingText";
import Connection from "./components/Connection/Connection";
// import AutoScrollCards from "./components/AutoScrollCards/AutoScrollCards";



function App() {
  const { t, i18n } = useTranslation();
  const laungage = localStorage.getItem("i18nextLng");
  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  };

  return (
    <>
      <Header laungage={laungage} handleChange={handleChange} t={t} />
      <Hero t= {t}/>
      <About t= {t}/>
      <Services t= {t}/>
      <SwiperComp t= {t}/>
      <TypeServices t= {t}/>
      <ScrollingText t= {t}/>
      {/* <AutoScrollCards t= {t}/> */}
      <Connection t= {t}/>
      <Footer t= {t}/>
    </>
  );
}
export default App;
