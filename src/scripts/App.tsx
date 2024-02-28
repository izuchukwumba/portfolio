import React from "react";
import "../styles/App.css";
import Nav from "./Nav";
import Intro from "./Intro";
import Skills from "./Skills";

import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Skills />
      {/* Intro, Skills, Portfolio */}
      <Footer />
    </div>
  );
};

export default App;
