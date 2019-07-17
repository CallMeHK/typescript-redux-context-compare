import React, { Component } from "react";
import Context from "./setup/ContextSetup";

class ChildC extends Component {
  static contextType = Context;

  onChange = (e: any) => {
    e.preventDefault();
    this.context.dispatch({
      type: "set-word",
      payload: e.target.value
    });
  };

  render() {
    const { word, thing } = this.context.state;
    return (
      <div className="sub-app">
        <div>ChildC</div>
        <div>
          <div>subreddits</div>
          <>
            {thing.subreddits.map((sub: string, i: number) => (
              <div key={"CC-thing" + i}>
                {i + 1}. {sub}
              </div>
            ))}
          </>
          <div>-------------------------------</div>
          <div>
            <label>Word:</label>
            <input value={word} onChange={this.onChange} />
          </div>
        </div>
      </div>
    );
  }
}
export default ChildC;
