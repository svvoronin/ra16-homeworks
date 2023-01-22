import React from "react";

export const NewsBlock = () => {
  return (
    <div className="news-wrapper">
      <div className="news-menu">
        <span>All News</span>
      </div>
      <div className="news-items">
        <a href="#">News1</a>
        <a href="#">News2</a>
        <a href="#">News3</a>
        <a href="#">News4</a>
        <a href="#">News5</a>
      </div>
    </div>
  );
};

export default NewsBlock;
