import React from "react";
import "../styles/App.css";
import Nav from "./Nav";
import Intro from "./Intro";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      {/* Intro, Skills, Portfolio */}
      <Footer />
    </div>
  );
}

export default App;
