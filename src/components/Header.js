import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import LanguageSwitcher from "../LanguageSwitcher";
import {withTranslation} from 'react-i18next';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;
    return (
      <>
        <header className="position-absolute w-100">
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
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-12 offset-md-1 col-md-11">
                <div className="swiper-container hero-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide slide-content d-flex align-items-center">
                      <div className="single-slide">
                        <h2 data-aos="fade-right" data-aos-delay="200">
                          Demo Wallets
                          <br />
                          crypto API
                        </h2>
                        <p data-aos="fade-right" data-aos-delay="600">
                          See each and every Trade & Quote happening in the US
                          in real time,
                          <br /> and access trillions of rows of historical tick
                          data in an instant using our crypto API.
                        </p>
                        <a
                          data-aos="fade-right"
                          data-aos-delay="900"
                          href="#"
                          className="btn btn-primary"
                        >
                          See More
                        </a>
                        <a
                          data-aos="fade-right"
                          data-aos-delay="900"
                          href="#"
                          className="btn btn-primary"
                        >
                          Get Now
                        </a>
                      </div>
                    </div>
                    {/* <div className="swiper-slide slide-content d-flex align-items-center">
                      <div className="single-slide">
                        <h1 data-aos="fade-right" data-aos-delay="200">
                        Demo Wallets
                          <br /> crypto API
                        </h1>
                        <p data-aos="fade-right" data-aos-delay="600">
                        There is no limit to how much you can use our crypto data API.  
                          <br /> No maximum queries per minute or daily call limits on all premium plans.     
                        </p>
                        <a
                          data-aos="fade-right"
                          data-aos-delay="900"
                          href="#"
                          className="btn btn-primary"
                        >
                          See More
                        </a>
                        <a
                          data-aos="fade-right"
                          data-aos-delay="900"
                          href="#"
                          className="btn btn-primary"
                        >
                          Get Now
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Add Control --> */}
            <span className="arr-left">
              <i className="fa fa-angle-left"></i>
            </span>
            <span className="arr-right">
              <i className="fa fa-angle-right"></i>
            </span>
          </div>
          <div className="texture"></div>
          <div className="diag-bg"></div>
        </section>
      </>
    );
  }
}

export default withTranslation()(Header);
