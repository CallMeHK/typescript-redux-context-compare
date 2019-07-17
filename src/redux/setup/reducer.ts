export interface IStore {
  count: number;
  word: string;
  thing: Reddit;
}

export interface Reddit {
  good: boolean;
  subreddits: string[];
}

export interface IAction {
  type: string;
  payload: IStore;
}

let store: IStore = {
  count: 1,
  word: "yeet",
  thing: { good: false, subreddits: ["nba", "funny", "dankmemes"] }
};

const reducer = (state: IStore = store, action: IAction): IStore => {
  switch (action.type) {
    case "set-count":
      return { ...state, ...action.payload };
    case "set-word":
      return { ...state, ...action.payload };
    case "set-thing-good":
      return { ...state, thing: { ...state.thing, ...action.payload } };
    case "set-thing-subreddits":
      return {
        ...state,
        thing: { ...state.thing, ...action.payload }
      };
    default:
      return state;
  }
};

export default reducer;
