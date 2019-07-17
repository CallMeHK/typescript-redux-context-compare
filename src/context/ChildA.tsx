import * as React from "react";
import ChildB from "./ChildB";
import ChildC from "./ChildC";

const ChildA: React.FunctionComponent = () => {
  return (
    <div className="sub-app">
      <div>
        <b>ChildA</b>
      </div>
      <div className="children">
        <ChildB />
        <ChildC />
      </div>
    </div>
  );
};

export default ChildA;
