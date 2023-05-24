import React from "react";
import "./Abount.css";
import HeaderFrom from "./HeaderFrom";
import Footer from "./Footer";

class Abount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <HeaderFrom />
        <section className="pricing-table">
          <div className="container">
            <div className="title text-center">
              <h1 className="title-blue">Contract Us</h1>
            </div>
            <div className="row no-gutters col-lg-12">
              <form className="col-lg-12" method="get">
                <div className="form-group col-lg-6">
                  <label htmlFor="formGroupExampleInput">Example label</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example input"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label htmlFor="formGroupExampleInput">Example label</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example input"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Abount;
