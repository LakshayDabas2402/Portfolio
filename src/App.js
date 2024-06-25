import React from "react";
import Net from "./components/About/Net";
import About from "./components/About/About";
import Contact from "./components/contacts/Contact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
  <div>
        <Net />
      
        <section style={{ marginTop: "720px" }}>
          <About />
          {/* <Projects /> */}
          <Contact />
        </section>
      
        </div>
  )
};

export default App;
