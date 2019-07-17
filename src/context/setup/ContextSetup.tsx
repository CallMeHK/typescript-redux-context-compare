import React, { useReducer } from "react";
import reducer, {IAction} from "./reducer";
import store, { IStore } from "./store";

export interface IContext {
  state: IStore;
  dispatch: Function;
  dumbDispatch: Function;
}

// set up context, provider, consumer
const Context = React.createContext<Partial<IContext>>({});
const Provider = Context.Provider;
const Consumer = Context.Consumer;

// create a wrapper to provide context to react application
const ProviderComponent: React.FunctionComponent = props => {
  let [state, dumbDispatch] = useReducer(reducer, store);

  const dispatch = (action: IAction | Function) => {
    if (typeof action === "function") {
      action({ dispatch: dumbDispatch, state });
    } else {
      dumbDispatch(action);
    }
  };

  let value: IContext = { state, dispatch, dumbDispatch };

  return <Provider value={value}>{props.children}</Provider>;
};

export { Provider, Consumer, ProviderComponent };

export default Context;
