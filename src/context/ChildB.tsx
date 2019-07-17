import React, { useContext, useCallback } from "react";
import Context, {IContext} from "./setup/ContextSetup";

const ChildB: React.FunctionComponent = () => {
  const { state, dispatch } = useContext(Context) as IContext;
  
  const increaseCount = useCallback(
    () => dispatch({ type: "set-count", payload: state.count + 1 }),
    [state.count, dispatch]
  );
  return (
    <div className="sub-app">
      <div>ChildB</div>
      <div>
        <p>{state.count}</p>
        <p>{state.word}</p>
        <div>
          <button onClick={increaseCount}>increase</button>
        </div>
      </div>
    </div>
  );
};

export default ChildB;
