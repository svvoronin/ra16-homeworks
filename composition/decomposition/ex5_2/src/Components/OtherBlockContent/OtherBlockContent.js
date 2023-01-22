import React from "react";

export const OtherBlockContent = ({ children, title }) => {
  return (
    <div className="other-block-content-wrapper">
      <div className="other-block-content-title">{title}</div>
      <div className="other-block-content-items">{children}</div>
    </div>
  );
};

export default OtherBlockContent;
