import logo from "./logo.svg";
import "./App.css";
import { Trans, useTranslation } from "react-i18next";
import i18next from "i18next";
import { BsGlobe } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import 'flag-icon-css/css/flag-icons.min.css';
import cookies from 'js-cookie';
import { useEffect } from "react";

function App() {
  const { t } = useTranslation();
  const languages = [
    {
      code: "fr",
      name: "Français",
      country_code: "fr",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      country_code: "sa",
    },
  ];


  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])
  return (
    <div>
      <header className="App-header">
        <div class="dropdown style-free">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           <BsGlobe/>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code} >
                <button class="dropdown-item" onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                    disabled= {code=== currentLanguageCode }>
                <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                  {name}</button>
              </li>
            ))}
          </ul>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Trans components={{ code:<code/> }}>
          {t("welcome_message")}
        </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           {t("sub_title")}
          
        </a>
      </header>
    </div>
  );
}

export default App;
