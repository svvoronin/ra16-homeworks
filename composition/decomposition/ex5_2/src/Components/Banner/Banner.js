import React from "react";

export const Banner = ({ urlImage, urlBanner }) => {
  return (
    <div className="banner">
      <a href={urlBanner}>
        <img src={urlImage} alt="" />
      </a>
    </div>
  );
};

export default Banner;
