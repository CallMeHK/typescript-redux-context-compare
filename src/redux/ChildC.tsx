import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "./setup/reducer"
import { AppState } from "./setup/rootReducer"
import { setWord } from "./setup/actions"

interface IProps extends IStore {
  change: Function
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  change: (word: string) => setWord(dispatch)(word)
});

const mapStateToProps = (state: AppState) => ({
  ...state.reducer
});

class ChildC extends Component<IProps> {

  onChange = (e: any) => {
    e.preventDefault();
    this.props.change(e.target.value);
  };

  render() {
    const { word, thing } = this.props;
    return (
      <div className="sub-app">
        <div>ChildC</div>
        <div>
          <div>subreddits</div>
          <>
            {thing.subreddits.map((sub: string, i: number) => (
              <div key={"RC-thing" + i}>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildC);
