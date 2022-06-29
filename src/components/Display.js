import React from "react";

const Display = ({ points, username, title, comments }) => {
  return (
    <>
      <h4>{title}</h4>
      <ul>
        <li>{points} points</li>
        <li>by {username}</li>
        <li>{comments} comments</li>
      </ul>
    </>
  );
};

export default Display;
