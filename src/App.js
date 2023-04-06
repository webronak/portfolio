import react, { Component, useEffect } from "react";
import "./App.scss";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { backgroundAnimation } from "./backgroundAnimation";
import { customizedCursor } from "./cursor";
function App() {
  useEffect(() => {
    backgroundAnimation();
    // customizedCursor();
  }, []);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Main />
    </Router>
  );
}

export default App;
