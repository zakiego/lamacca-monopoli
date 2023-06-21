import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Learn from "./pages/Learn";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact Component={Layout}>
            <Route index exact Component={Home} />
            <Route path="/about" index exact Component={About} />
            <Route path="/learn" index exact Component={Learn} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
