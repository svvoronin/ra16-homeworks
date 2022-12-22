import React from "react";
import Star from "../Star/Star";

const Stars = ({ count }) => {
  const StarsCount = (x) => {
    if ((x <= 0) | (x > 5)) {
      return null;
    }
    const arr = [];
    for (let i = 1; i <= x; i++) {
      arr.push(Star);
    }
    return arr;
  };

  return (
    <>
      <ul className="card-body-stars u-clearfix">
        <li>{StarsCount(count)}</li>
      </ul>
    </>
  );
};

export default Stars;
