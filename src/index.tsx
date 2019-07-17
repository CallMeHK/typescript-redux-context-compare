import * as React from "react";
import { render } from "react-dom";
import ContextApp from "./context/ContextApp";
import PropDrillinApp from "./drilling/PropDrillingApp";
import ReduxApp from "./redux/ReduxApp";

import "./styles.css";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h2>Demo of typescript data sharing across components</h2>
      <div>
        <PropDrillinApp />
        <ContextApp />
        <ReduxApp />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
