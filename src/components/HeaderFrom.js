import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import LanguageSwitcher from "../LanguageSwitcher";
import {withTranslation} from 'react-i18next';

class HeaderFrom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;
    return (
      <>
        <header className="HeaderAbount w-100">
          <div className="container">
            <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
              <div className="contact">
                <Link href="tel:+1234567890" className="tel">
                  <i className="fa fa-phone" aria-hidden="true"></i>026597000
                </Link>
                <Link href="mailto:info@yourmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  info@yourmail.com
                </Link>
              </div>
              <nav className="d-flex aic">
                <Link href="#" className="login">
                  <i className="fa fa-user" aria-hidden="true"></i>{t('login')}
                </Link>
                <Link href="#" className="login">
                  <i className="fa fa-user" aria-hidden="true"></i>{t('register')}
                </Link>
                <ul className="nav social d-none d-md-flex">
                  <li>
                    <Link href="https://www.facebook.com/fh5co" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-google-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                  <LanguageSwitcher/>
                  </li>
                </ul>
              </nav>
            </div>
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to="/">
                <img src="./assets/images/logo.png" className="Logo-Header" alt="Multipurpose" />
              </Link>
              <div className="group d-flex align-items-center">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="login-icon d-sm-none" href="#">
                  <i className="fa fa-user"></i>
                </Link>
                <Link className="cart" href="#">
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </div>
              <Link className="search-icon d-none d-md-block" href="#">
                <i className="fa fa-search"></i>
              </Link>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                    {t('products')}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                    {t('doc')}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                    {t('company')}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                    {t('pricing')}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                    {t('content')}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/abount">
                    {t('contactus')}
                    </Link>
                  </li>
                </ul>
                <form
                  className="bg-white search-form"
                  method="get"
                  id="searchform"
                >
                  <div className="input-group">
                    <input
                      className="field form-control"
                      id="s"
                      name="s"
                      type="text"
                      placeholder="Search"
                    />
                    <span className="input-group-btn">
                      <input
                        className="submit btn btn-primary"
                        id="searchsubmit"
                        name="submit"
                        type="submit"
                        value="Search"
                      />
                    </span>
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default withTranslation()(HeaderFrom);
