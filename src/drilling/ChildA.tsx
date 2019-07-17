import * as React from "react";
import { Reddit } from "./PropDrillingApp";
import ChildB from "./ChildB";
import ChildC from "./ChildC";

interface IProps {
  count: number;
  word: string;
  thing: Reddit;
  increaseCount: Function;
  changeWord: Function;
}

class ChildA extends React.Component<IProps> {
  render() {
    return (
      <div className="sub-app">
        <div>
          <b>ChildA</b>
        </div>
        <div className="children">
          <ChildB
            count={this.props.count}
            word={this.props.word}
            increaseCount={this.props.increaseCount}
          />
          <ChildC
            count={this.props.count}
            thing={this.props.thing}
            word={this.props.word}
            changeWord={this.props.changeWord}
          />
        </div>
      </div>
    );
  }
}

export default ChildA;
