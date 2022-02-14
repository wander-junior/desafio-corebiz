import ReactDOM from "react-dom";
import React from "react";

import GlobalStyle from "./globalStyles";
import Theme from "./Theme";

import Header from "./components/Header";

const App = () => {
    return (
        <Theme>
            <GlobalStyle />
            <Header />
        </Theme>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
