import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

import classes from "./index.module.css";

const Details = ({ userId }) => {
  const [userContent, setuserContent] = useState(null);
  const [isAllowFetch, setisAllowFetch] = useState(true);
  const [isPending, setisPending] = useState(false);

  const getUserData = async () => {
    try {
      if (isAllowFetch) {
        setuserContent(null);
        setisPending(true);
        const response = await axios.get(
          `${process.env.REACT_APP_USER_URL}${userId}.json`
        );
        setisPending(false);
        if (response.status === 200) {
          setuserContent(response.data);
        }
      }
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
      setisAllowFetch(false);
      setisPending(false);
    }
  };

  useEffect(() => {
    console.log(isAllowFetch);
    getUserData();
    // eslint-disable-next-line
  }, [userId]);

  return (
    <>
      {isPending && <span>loading content...</span>}
      {userContent !== null && (
        <div className={classes.cardContainer}>
          <img
            className={classes.avatar}
            src={userContent.avatar}
            alt={userContent.name}
          />
          <span className={`${classes.textElement} ${classes.nameElement}`}>
            {userContent.name}
          </span>
          <span className={classes.textElement}>
            City: {userContent.details.city}
          </span>
          <span className={classes.textElement}>
            Company: {userContent.details.company}
          </span>
          <span className={classes.textElement}>
            Position: {userContent.details.position}
          </span>
        </div>
      )}
    </>
  );
};

Details.defaultProps = {
  userId: 0,
};

Details.propTypes = {
  userId: PropTypes.number,
};

export default Details;
