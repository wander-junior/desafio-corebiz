import ReactDOM from "react-dom";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import Theme from "./Theme";

import Home from "./pages/Home";
import QuantityContext from "./contexts/QuantityContext";

const App = () => {
    const [totalItems, setTotalItems] = useState(0)

    return (
        <QuantityContext.Provider value={[totalItems, setTotalItems]}>
            <BrowserRouter>
                <Theme>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Theme>
            </BrowserRouter>
        </QuantityContext.Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
