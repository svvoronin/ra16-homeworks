import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./index.module.css";

import Details from "../Details";

const List = () => {
  const [users, setusers] = useState([]);
  const [isAllowFetch, setisAllowFetch] = useState(true);
  const [isPending, setisPending] = useState(false);
  const [activeUser, setactiveUser] = useState(null);

  const getUsers = async () => {
    try {
      if (isAllowFetch) {
        setisPending(true);
        const response = await axios.get(process.env.REACT_APP_USERS_URL);
        setisPending(false);
        if (response.data.length !== 0) {
          setusers([...response.data]);
        }
        return;
      }
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
      setisPending(false);
      setisAllowFetch(false);
    }
  };

  useEffect(() => {
    getUsers();
    return () => {
      setisAllowFetch(false);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.container}>
      {isPending && <span>loading content...</span>}
      {!isPending && users.length !== 0 && (
        <div className={classes.usersContainer}>
          {users.map((element, index) => (
            <div
              key={index}
              className={classes.userList}
              onClick={() => setactiveUser(element.id)}
            >
              {element.name}
            </div>
          ))}
        </div>
      )}
      {activeUser !== null && <Details userId={activeUser} />}
    </div>
  );
};

export default List;
