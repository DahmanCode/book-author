import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import "./assets/css/margins-paddings.css";
     
import AOS from "aos";
import { useEffect } from "react";
import './assets/css/aos.css';
import headerData from './data/header.json'
import footerData from './data/footer.json'

function ScrollToTop () {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {  
  const { header } = headerData;
  const { footer } = footerData;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="section-wrapper">
      <div id="preLoader"></div>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<MainPage header={header} footer={footer} />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
