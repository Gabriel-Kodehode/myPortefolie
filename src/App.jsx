import { useState, useEffect, createContext } from "react";
import Header from "./Header.jsx";
import Picture from "./Picture.jsx";
import Kontakt from "./KontaktInfo.jsx";
import Light from "./Light.jsx";
import InfoBox from "./InfoBox.jsx";
import Footer from "./Footer.jsx";
import AppLogo from "./AppLogo.jsx";
import Kvalifikasjoner from "./Kvalifikasjoner.jsx";
import Prosjekt from "./Prosjekt.jsx";

export const AppContext = createContext();

function App() {
  return (
    <>
      <AppContext.Provider>
        <Header />
        <div id="FlexLayout">
          <Light />
          <Picture />
          <Kontakt />
          <InfoBox />
          <AppLogo />
          <Kvalifikasjoner />
          <Prosjekt />
        </div>
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
