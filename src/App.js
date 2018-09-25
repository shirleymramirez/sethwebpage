import React, { Component } from "react";
import Navbar from "./Components/Navbar/navbar";
import "./App.css";
// import ReallySmoothScroll from "really-smooth-scroll";
// import { BrowserRouter } from "react-router";

// BrowserRouter.listen(() => {
//   window.scrollTo(0, 0);
// });

// ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* {this.props.children} */}
      </div>
    );
  }
}

export default App;
