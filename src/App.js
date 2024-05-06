import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./compenent/Home";
import About from "./compenent/About";
import Projects from "./compenent/Projects";
import Contact from "./compenent/Contact";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./compenent/Layout";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/"  element={<Home />} />
            <Route  path="/about"  element={<About />} />
            <Route  path="/project"  element={<Projects />} />
            <Route  path="/contact"  element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;


