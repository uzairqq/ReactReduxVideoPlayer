import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails
        author="uzair"
        timeAgo="Today at 5:00PM"
        comment="No Need To it , just time waste"
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="laraib"
        timeAgo="Today at 4:45PM"
        comment="Nice Blog Post"
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="baba"
        timeAgo="Yesterday at 2:00AM"
        comment="I Love This Article"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
