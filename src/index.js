import ReactDOM from "react-dom";
import React from "react";

import GlobalStyle from "./globalStyles";
import Theme from "./Theme";

const App = () => {
    return (
        <Theme>
            <GlobalStyle />
            <h1>Desafio CoreBiz</h1>
        </Theme>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
