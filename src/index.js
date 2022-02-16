import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import GlobalStyle from "./globalStyles";
import Theme from "./Theme";

import Home from "./pages/Home";
import QuantityContext from "./contexts/QuantityContext";

const App = () => {
    const [totalItems, setTotalItems] = useState(() => {
        const browserTotalItems = window.localStorage.getItem('totalItems');
        if (browserTotalItems === null) return 0;
        return +browserTotalItems;
    });

    useEffect(() => {
        window.localStorage.setItem('totalItems', totalItems);
    }, [totalItems])

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
