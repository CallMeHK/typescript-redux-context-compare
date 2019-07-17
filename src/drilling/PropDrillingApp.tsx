import * as React from "react";
import ChildA from "./ChildA";
export interface IState {
  count: number;
  word: string;
  thing: Reddit;
}

export interface Reddit {
  good: boolean;
  subreddits: string[];
}

class PropDrillingApp extends React.Component<{}, IState> {
  state = {
    count: 1,
    word: "yeet",
    thing: { good: false, subreddits: ["nba", "funny", "dankmemes"] }
  };

  increaseCount = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  changeWord = (e: any) => {
    e.preventDefault();
    this.setState({ word: e.target.value });
  };

  render() {
    const state = this.state;
    return (
      <div className="sub-app">
        <h3>PropDrillingApp</h3>
        <ChildA
          {...state}
          increaseCount={this.increaseCount}
          changeWord={this.changeWord}
        />
      </div>
    );
  }
}

export default PropDrillingApp;
