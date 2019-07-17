import { Dispatch } from "redux";

const setCount = (dispatch: Dispatch) => (count: number) => {
  dispatch({
    type: "set-count",
    payload: { count }
  });
};

const setWord = (dispatch: Dispatch) => (word: string) => {
  dispatch({
    type: "set-word",
    payload: { word }
  });
};

export { setWord, setCount };
