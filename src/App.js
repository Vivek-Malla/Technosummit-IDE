import React from "react";
import Roundone from "./components/Roundone.js";
import Roundtwo from "./components/Roundtwo.js";
import Rules from "./components/Rules.js";
import Home from "./components/Home.js";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/round1" element={<Roundone />}/>
        <Route path="/round2" element={<Roundtwo />}/>
        <Route path="/rules" element={<Rules />}/>
      </Routes>
    </div>
    );
  }
  
  
  export default App;