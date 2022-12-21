import style from "./style.module.css";

import viewList from "./../image/view_list_black_48dp.svg";
import viewGrid from "./../image/grid_view_black_48dp.svg";

const IconSwitch = ({ icon, onSwitch }) => {
  if (icon === "view_list") {
    return (
      <>
        <span onClick={() => onSwitch()} className={style.icon}>
          <img src={viewGrid} />
        </span>
      </>
    );
  } else {
    return (
      <>
        <span onClick={() => onSwitch()} className={style.icon}>
          <img src={viewList} />
        </span>
      </>
    );
  }
};

export default IconSwitch;
