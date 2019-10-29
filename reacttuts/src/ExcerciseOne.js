import React from "react";

const GetDateTime = () => {
  return new Date().toLocaleTimeString();
};

const ExcerciseOne = () => {
  const text = "Current Time";

  return (
    <div>
      <h2>{text}</h2>
      <h4>{GetDateTime()}</h4>
    </div>
  );
};

export default ExcerciseOne;
