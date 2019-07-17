import * as React from "react";
import { Provider } from "react-redux";
import ChildA from "./ChildA";

import configureStore from "./setup/store";

const store = configureStore();

const ReduxApp: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <div className="sub-app">
        <h3>ReduxApp</h3>
        <ChildA />
      </div>
    </Provider>
  );
};

export default ReduxApp;
