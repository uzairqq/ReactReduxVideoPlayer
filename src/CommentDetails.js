import React from "react";
import faker from "faker";

const CommentDetails = props => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>

        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice Blog Post</div>
      </div>
    </div>
  );
};

export default CommentDetails;
