import React from "react";
import "./App.css";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./header";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Header />
      <About />
      <Projects />
      <Contact />
    <App />
    <footer>
        <p>© 2025 Kishore Kumar | All Rights Reserved</p>
      </footer>
  </>
);
