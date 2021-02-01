import React from "react";
import "./App.css";

import JSXImage from "./assets/jsx-src.png";
import JSXImage1 from "./assets/code2.png";
import JSXImage2 from "./assets/Arrays.mp4";

function App() {
  return (
    <div>
      <div>
        <h1>bienvenu dans GomyCode</h1>
        <img src="jsx.png" alt="" style={{ width: "30%" }} />

        <img src={JSXImage} alt="" style={{ width: "30%" }} />

        <img src="code2.png" alt="" style={{ width: "30%" }} />

        <img src={JSXImage1} alt="" style={{ width: "30%" }} />
      </div>
      <video width={1080} height={720} controls>
        <source src={JSXImage2} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
