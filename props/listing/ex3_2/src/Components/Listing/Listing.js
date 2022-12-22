import React from "react";
import PropTypes from "prop-types";

const Listing = ({ data }) => {
  const level = (quanity) => {
    if (quanity < 10) {
      return "level-low";
    }
    if (quanity > 10 && quanity < 21) {
      return "level-medium";
    }
    if (quanity > 20) {
      return "level-high";
    }
  };

  const currCode = (currencyCode) => {
    if (currencyCode === "EUR") {
      return "€";
    }
    if (currencyCode === "USD") {
      return "$";
    }
    return currencyCode;
  };

  const checkLength = (title = "") => {
    return title.length > 50 ? title.slice(0, 50) + "..." : title;
  };

  return (
    <div>
      <div className="item-list">
        {data.map((item) => {
          return (
            <div className="item" key={item.listing_id}>
              <div className="item-image">
                <a href={item.url}>
                  <img
                    src={item.MainImage && item.MainImage.url_570xN}
                    alt={item.title}
                  />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{checkLength(item.title)}</p>
                <p className="item-price">
                  {currCode(item.currency_code) + item.price}
                </p>
                <p className={`item-quantity ${level(item.quantity)}`}>
                  {item.quantity} left
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  count: PropTypes.array,
};

export default Listing;
