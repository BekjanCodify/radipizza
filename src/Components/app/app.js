import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../Home";
import About from "../about";
import Basic from "../basic";

function App() {
    return (
        <>
            <Router>
                <Basic />
                <Routes>
                    <Route exact path="/About" element={<About />} />
                    <Route exact path="/Home" element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;