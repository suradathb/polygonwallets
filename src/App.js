import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Abount from "./components/Abount";

// const {restClient} = require('@polygon.io/client-js');
// const rest = restClient('Od29NpN35FuDgRqgUrpdhhD1YGvp1ICw');

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abount" element={<Abount />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
