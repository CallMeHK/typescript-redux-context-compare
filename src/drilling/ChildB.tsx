import * as React from "react";

interface IProps {
  count: number;
  word: string;
  increaseCount: Function;
}

const ChildB: React.FunctionComponent<IProps> = props => {
  return (
    <div className="sub-app">
      <div>ChildB</div>
      <div>
        <p>{props.count}</p>
        <p>{props.word}</p>
        <div>
          <button onClick={() => props.increaseCount()}>increase</button>
        </div>
      </div>
    </div>
  );
};

export default ChildB;
