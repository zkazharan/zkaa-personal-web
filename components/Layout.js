import { useState } from "react";

import Navbar from "./Navbar";
import { DarkMode, LanguageSwitch } from "../components/Context";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");

  const languageHandle = () => {
    if (language == "id") {
      setLanguage("en");
    } else {
      setLanguage("id");
    }
  };

  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      <LanguageSwitch.Provider value={{ language, languageHandle }}>
        <div className={darkMode ? "dark" : ""}>
          <Navbar />
          {children}
        </div>
      </LanguageSwitch.Provider>
    </DarkMode.Provider>
  );
}
