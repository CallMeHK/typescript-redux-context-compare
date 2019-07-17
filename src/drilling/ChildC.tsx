import * as React from "react";
import { Reddit } from "./PropDrillingApp";

interface IProps {
  count: number;
  word: string;
  thing: Reddit;
  changeWord: Function;
}

const ChildC: React.FunctionComponent<IProps> = props => {
  return (
    <div className="sub-app">
      <div>ChildC</div>
      <div>
        <div>subreddits</div>
        <>
          {props.thing.subreddits.map((sub, i) => (
            <div key={"PD-thing" + i}>
              {i + 1}. {sub}
            </div>
          ))}
        </>
        <div>-------------------------------</div>
        <div>
          <label>Word:</label>
          <input value={props.word} onChange={e => props.changeWord(e)} />
        </div>
      </div>
    </div>
  );
};

export default ChildC;
