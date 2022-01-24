import React from "react";
import Search from "./Search";
import Details from "./Details";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-wrap">
        <Search city="Barcelona" />
        <Details />
      </div>
      <Footer />
    </div>
  );
}
export default App;
