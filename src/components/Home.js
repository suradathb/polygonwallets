import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>
        {/* <!-- Hero Start --> */}
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-12 offset-md-1 col-md-11">
                <div className="swiper-container hero-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide slide-content d-flex align-items-center">
                      <div className="single-slide">
                        <h2 data-aos="fade-right" data-aos-delay="200">
                          Tick by Tick
                          <br/>crypto API
                        </h2>
                        <p data-aos="fade-right" data-aos-delay="600">
                        See each and every Trade & Quote happening in the US in real time,  
                          <br /> and access trillions of rows of historical tick data in an instant using our crypto API.
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
                    <div className="swiper-slide slide-content d-flex align-items-center">
                      <div className="single-slide">
                        <h1 data-aos="fade-right" data-aos-delay="200">
                        Unlimited REST
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
                    </div>
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
        {/* <!-- Hero End -->
    <!-- Call To Action Start --> */}
        <section className="cta" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
              <div
                className="content"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h2>FOR BUILDING THE MODERN WEBSITE</h2>
                <p>
                  Packed with all the goodies you can get, Kallyas is our
                  flagship premium template.
                </p>
              </div>
              <div
                className="subscribe-btn"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-offset="0"
              >
                <a href="#" className="btn btn-primary">
                  Join Newsletter
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Call To Action End -->
    <!-- Services Start --> */}
        <section className="services">
          <div className="container">
            <div className="title text-center">
              <h6>Our Speakers</h6>
              <h1 className="title-blue">Why Choose Us</h1>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div
                    className="media"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="400"
                  >
                    <img
                      className="mr-4"
                      src="assets/images/service1.png"
                      alt="Web Development"
                    />
                    <div className="media-body">
                      <h5>Web Development</h5>
                      Donec volutpat tincidunt neque, vitae lobortis libero
                      mattis sed tempus.
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div
                    className="media"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="600"
                  >
                    <img
                      className="mr-4"
                      src="assets/images/service2.png"
                      alt="Web Development"
                    />
                    <div className="media-body">
                      <h5>Testing for perfection</h5>
                      Donec volutpat tincidunt neque, vitae lobortis libero
                      mattis sed tempus.
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div
                    className="media"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="800"
                  >
                    <img
                      className="mr-4"
                      src="assets/images/service3.png"
                      alt="Web Development"
                    />
                    <div className="media-body">
                      <h5>Discussion of the idea</h5>
                      Donec volutpat tincidunt neque, vitae lobortis libero
                      mattis sed tempus.
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div
                    className="media"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="400"
                  >
                    <img
                      className="mr-4"
                      src="assets/images/service4.png"
                      alt="Web Development"
                    />
                    <div className="media-body">
                      <h5>Modern style</h5>
                      Donec volutpat tincidunt neque, vitae lobortis libero
                      mattis sed tempus.
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div
                    className="media"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="600"
                  >
                    <img
                      className="mr-4"
                      src="assets/images/service1.png"
                      alt="Web Development"
                    />
                    <div className="media-body">
                      <h5>Web Development</h5>
                      Donec volutpat tincidunt neque, vitae lobortis libero
                      mattis sed tempus.
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div
                    className="media"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="800"
                  >
                    <img
                      className="mr-4"
                      src="assets/images/service5.png"
                      alt="Web Development"
                    />
                    <div className="media-body">
                      <h5>Elaboration of the core</h5>
                      Donec volutpat tincidunt neque, vitae lobortis libero
                      mattis sed tempus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Services End -->
    <!-- Featured Start --> */}
        <section className="featured">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="800"
              >
                <div className="title">
                  <h6 className="title-primary">about Tamplate</h6>
                  <h1 className="title-blue">
                    a rich featured, epic & premium work.
                  </h1>
                </div>
                <p>
                  There are many variations of passages of available but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly
                  believable. If you are going to use a passage of you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text. All the generators on the Internet.
                </p>
                <div className="media-element d-flex justify-content-between">
                  <div className="media">
                    <i className="fa fa-magic mr-4"></i>
                    <div className="media-body">
                      <h5>any offer</h5>
                      New York, United States
                    </div>
                  </div>
                  <div className="media">
                    <i className="fa fa-magic mr-4"></i>
                    <div className="media-body">
                      <h5>any offer</h5>
                      New York, United States
                    </div>
                  </div>
                </div>
                <a href="#" className="btn btn-primary">
                  See More
                </a>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="800"
              >
                <div className="featured-img">
                  <img
                    className="featured-big"
                    src="assets/images/featured-img1.jpg"
                    alt="Featured 1"
                  />
                  <img
                    className="featured-small"
                    src="assets/images/featured-img2.jpg"
                    alt="Featured 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Featured End -->
    <!-- Recent Posts Start --> */}
        <section className="recent-posts">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="single-rpost d-sm-flex align-items-center"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <div className="post-content text-sm-right">
                    <time dateTime="2019-04-06T13:53">15 Oct, 2019</time>
                    <h3>
                      <a href="#">Proudly for us to build stylish</a>
                    </h3>
                    <p>
                      <a href="#">Seanding</a>, <a href="#">Website</a>,{" "}
                      <a href="#">E-commerce</a>
                    </p>
                    <a className="post-btn" href="#">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="post-thumb">
                    <img
                      className="img-fluid"
                      src="assets/images/post1.jpg"
                      alt="Post 1"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="single-rpost d-sm-flex align-items-center"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <div className="post-thumb">
                    <img
                      className="img-fluid"
                      src="assets/images/post2.jpg"
                      alt="Post 1"
                    />
                  </div>
                  <div className="post-content">
                    <time dateTime="2019-04-06T13:53">15 Oct, 2019</time>
                    <h3>
                      <a href="#">Remind me to water the plants</a>
                    </h3>
                    <p>
                      <a href="#">Seanding</a>, <a href="#">Website</a>,{" "}
                      <a href="#">E-commerce</a>
                    </p>
                    <a className="post-btn" href="#">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="single-rpost d-sm-flex align-items-center"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="800"
                >
                  <div className="post-content text-sm-right">
                    <time dateTime="2019-04-06T13:53">15 Oct, 2019</time>
                    <h3>
                      <a href="#">Add apples to the grocery list</a>
                    </h3>
                    <p>
                      <a href="#">Seanding</a>, <a href="#">Website</a>,{" "}
                      <a href="#">E-commerce</a>
                    </p>
                    <a className="post-btn" href="#">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="post-thumb">
                    <img
                      className="img-fluid"
                      src="assets/images/post3.jpg"
                      alt="Post 1"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="single-rpost d-sm-flex align-items-center"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="800"
                >
                  <div className="post-thumb">
                    <img
                      className="img-fluid"
                      src="assets/images/post4.jpg"
                      alt="Post 1"
                    />
                  </div>
                  <div className="post-content">
                    <time dateTime="2019-04-06T13:53">15 Oct, 2019</time>
                    <h3>
                      <a href="#">Make it warmer downstairs</a>
                    </h3>
                    <p>
                      <a href="#">Seanding</a>, <a href="#">Website</a>,{" "}
                      <a href="#">E-commerce</a>
                    </p>
                    <a className="post-btn" href="#">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a href="#" className="btn btn-primary">
                See More
              </a>
            </div>
          </div>
        </section>
        {/* <!-- Recent Posts End -->
    <!-- Trust Start --> */}
        <section className="trust">
          <div className="container">
            <div className="row">
              <div
                className="offset-xl-1 col-xl-6"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                <div className="title">
                  <h6 className="title-primary">about Tamplate</h6>
                  <h1>a rich featured, epic & premium work.</h1>
                </div>
                <p>
                  Suspendisse facilisis commodo lobortis. Nullam mollis lobortis
                  ex vel faucibus. Proin nec viverra turpis. Nulla eget justo
                  scelerisque, pretium purus vel, congue libero. Suspendisse
                  potenti.
                </p>
                <h5>Web Design & Development</h5>
                <ul className="list-unstyled">
                  <li>Web Content</li>
                  <li>Website other</li>
                  <li>Fashion</li>
                  <li>Moblie & Tablette</li>
                </ul>
              </div>
              <div className="col-xl-5 gallery">
                <div className="row no-gutters h-100" id="lightgallery">
                  <a
                    href="https://lorempixel.com/600/400/"
                    className="w-50 h-100 gal-img"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="400"
                  >
                    <img
                      className="img-fluid"
                      src="assets/images/gallery1.jpg"
                      alt="Gallery Image"
                    />
                    <i className="fa fa-caret-right"></i>
                  </a>
                  <a
                    href="https://lorempixel.com/600/400/"
                    className="w-50 h-50 gal-img"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="600"
                  >
                    <img
                      className="img-fluid"
                      src="assets/images/gallery2.jpg"
                      alt="Gallery Image"
                    />
                    <i className="fa fa-caret-right"></i>
                  </a>
                  <a
                    href="https://lorempixel.com/600/400/"
                    className="w-50 h-50 gal-img gal-img3"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="600"
                  >
                    <img
                      className="img-fluid"
                      src="assets/images/gallery3.jpg"
                      alt="Gallery Image"
                    />
                    <i className="fa fa-caret-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Trust End -->
    <!-- Pricing Start --> */}
        <section className="pricing-table">
          <div className="container">
            <div className="title text-center">
              <h6 className="title-primary">Our prices</h6>
              <h1 className="title-blue">Price Table List</h1>
            </div>
            <div className="row no-gutters">
              <div className="col-md-4">
                <div
                  className="single-pricing text-center"
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="600"
                >
                  <span>Monthly</span>
                  <h2>Starter</h2>
                  <p className="desc">Here goes some description</p>
                  <p className="price">$39.00</p>
                  <p>Create excepteur sint occaecat cupidatat non proident</p>
                  <a href="#" className="btn btn-primary">
                    Buy Now
                  </a>
                  <svg viewBox="0 0 170 193">
                    <path
                      fillRule="evenodd"
                      fill="rgb(238, 21, 21)"
                      d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="single-pricing text-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="600"
                >
                  <span>Monthly</span>
                  <h2>Starter</h2>
                  <p className="desc">Here goes some description</p>
                  <p className="price">$39.00</p>
                  <p>5GB Storage Space</p>
                  <p>20GB Monthly Bandwidth</p>
                  <p>My SQL Databases</p>
                  <p>100 Email Account</p>
                  <a href="#" className="btn btn-primary">
                    Buy Now
                  </a>
                  <svg viewBox="0 0 170 193">
                    <path
                      fillRule="evenodd"
                      fill="rgb(238, 21, 21)"
                      d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="single-pricing text-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="600"
                >
                  <span>Monthly</span>
                  <h2>Starter</h2>
                  <p className="desc">Here goes some description</p>
                  <p className="price">$39.00</p>
                  <p>Create excepteur sint occaecat cupidatat non proident</p>
                  <a href="#" className="btn btn-primary">
                    Buy Now
                  </a>
                  <svg viewBox="0 0 170 193">
                    <path
                      fillRule="evenodd"
                      fill="rgb(238, 21, 21)"
                      d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Pricing End -->
    <!-- Testimonial and Clients Start --> */}
        <section className="testimonial-and-clients">
          <div className="container">
            <div className="testimonials">
              <div className="swiper-container test-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide text-center">
                    <div className="row">
                      <div className="offset-lg-1 col-lg-10">
                        <div
                          className="test-img"
                          data-aos="fade-up"
                          data-aos-delay="0"
                          data-aos-offset="0"
                        >
                          <img
                            src="assets/images/test1.png"
                            alt="Testimonial 1"
                          />
                        </div>
                        <h5
                          data-aos="fade-up"
                          data-aos-delay="200"
                          data-aos-duration="600"
                          data-aos-offset="0"
                        >
                          John
                        </h5>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="400"
                          data-aos-duration="600"
                          data-aos-offset="0"
                        >
                          UI/UX Designer
                        </span>
                        <p
                          data-aos="fade-up"
                          data-aos-delay="600"
                          data-aos-duration="600"
                          data-aos-offset="0"
                        >
                          Ash's tactics & books have helped me a lot in my
                          understanding on how social media advertising works.I
                          can say that he is one of the best development
                          professionals i have dealt with so far. His experience
                          is great & he is such a great & pleasant person to
                          work with as he understands what you are
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide text-center">
                    <div className="row">
                      <div className="offset-lg-1 col-lg-10">
                        <div
                          className="test-img"
                          data-aos="fade-up"
                          data-aos-delay="0"
                          data-aos-offset="0"
                        >
                          <img
                            src="assets/images/test1.png"
                            alt="Testimonial 1"
                          />
                        </div>
                        <h5
                          data-aos="fade-up"
                          data-aos-delay="200"
                          data-aos-duration="600"
                          data-aos-offset="0"
                        >
                          John
                        </h5>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="400"
                          data-aos-duration="600"
                          data-aos-offset="0"
                        >
                          UI/UX Designer
                        </span>
                        <p
                          data-aos="fade-up"
                          data-aos-delay="600"
                          data-aos-duration="600"
                          data-aos-offset="0"
                        >
                          Ash's tactics & books have helped me a lot in my
                          understanding on how social media advertising works.I
                          can say that he is one of the best development
                          professionals i have dealt with so far. His experience
                          is great & he is such a great & pleasant person to
                          work with as he understands what you are
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide text-center">
                    <div className="row">
                      <div className="offset-lg-1 col-lg-10">
                        <div
                          className="test-img"
                          data-aos="fade-up"
                          data-aos-delay="0"
                          data-aos-offset="0"
                        >
                          <img
                            src="assets/images/test1.png"
                            alt="Testimonial 1"
                          />
                        </div>
                        <h5
                          data-aos="fade-up"
                          data-aos-delay="200"
                          data-aos-duration="600"
                          data-aos-offset="0"
                        >
                          John
                        </h5>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="400"
                          data-aos-duration="600"
                          data-aos-offset="0"
                        >
                          UI/UX Designer
                        </span>
                        <p
                          data-aos="fade-up"
                          data-aos-delay="600"
                          data-aos-duration="600"
                          data-aos-offset="0"
                        >
                          Ash's tactics & books have helped me a lot in my
                          understanding on how social media advertising works.I
                          can say that he is one of the best development
                          professionals i have dealt with so far. His experience
                          is great & he is such a great & pleasant person to
                          work with as he understands what you are
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="test-pagination"></div>
              </div>
            </div>
            <div
              className="clients"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              <div className="swiper-container clients-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="assets/images/client1.png" alt="Client 1" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/images/client2.png" alt="Client 2" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/images/client3.png" alt="Client 3" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/images/client4.png" alt="Client 4" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/images/client5.png" alt="Client 5" />
                  </div>
                </div>
                <div className="test-pagination"></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Testimonial and Clients End -->
    <!-- Call To Action 2 Start --> */}
        <section className="cta cta2" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
              <div
                className="content"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h2>FOR BUILDING THE MODERN WEBSITE</h2>
                <p>
                  Packed with all the goodies you can get, Kallyas is our
                  flagship premium template.
                </p>
              </div>
              <div
                className="subscribe-btn"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-offset="0"
              >
                <a href="#" className="btn btn-primary">
                  Join Newsletter
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Call To Action 2 End --> */}
      </>
    );
  }
}

export default Home;
