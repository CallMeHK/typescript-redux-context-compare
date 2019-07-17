import React from "react";
import { ProviderComponent } from "./setup/ContextSetup";
import ChildA from "./ChildA";

const ContextApp: React.FunctionComponent = () => {
  return (
    <ProviderComponent>
      <div className="sub-app">
        <h3>ContextApp</h3>
        <ChildA />
      </div>
    </ProviderComponent>
  );
};

export default ContextApp;
