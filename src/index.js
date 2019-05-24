import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails author="uzair" />
      <CommentDetails author="laraib" />
      <CommentDetails author="baba" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
