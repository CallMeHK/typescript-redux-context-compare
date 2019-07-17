import React, { useContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCount } from "./setup/actions";
import { AppState } from "./setup/rootReducer"

const ChildB: React.FunctionComponent = () => {
  const { count, word } = useSelector((state: AppState) => (state.reducer));
  const dispatch = useDispatch();
  const increaseCount = useCallback(() => setCount(dispatch)(count + 1), [
    count,
    dispatch
  ]);
  return (
    <div className="sub-app">
      <div>ChildB</div>
      <div>
        <p>{count}</p>
        <p>{word}</p>
        <div>
          <button onClick={increaseCount}>increase</button>
        </div>
      </div>
    </div>
  );
};

export default ChildB;
