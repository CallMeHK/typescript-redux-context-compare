import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
  reducer
});

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;