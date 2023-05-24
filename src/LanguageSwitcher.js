// LanguageSwitcher.js
import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

class LanguageSwitcher extends React.Component {
  changeLanguage = (lng) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  };

  render() {
    return (
      <>
        <nav className="d-flex aic">
          <li>
            <Link onClick={() => this.changeLanguage("en")}>Eng</Link>
          </li>
          <li>
            <Link onClick={() => this.changeLanguage("th")}>Thai</Link>
          </li>
        </nav>
      </>
    );
  }
}

export default withTranslation()(LanguageSwitcher);
