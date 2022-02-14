import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import Theme from "./Theme";

import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Theme>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Theme>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
