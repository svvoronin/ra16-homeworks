import { useState } from "react";

import IconSwitch from "../IconSwitch";
import CardsView from "../CardsView";
import ListView from "../ListView";
import productsData from "../image/imageSet";

import style from "./style.module.css";

const Store = () => {
  const [products, setProducts] = useState(productsData);
  const [typeView, setTypeView] = useState("view_list");

  const getType = () => {
    typeView === "view_list"
      ? setTypeView("view_module")
      : setTypeView("view_list");
  };

  return (
    <div className={style.container}>
      <IconSwitch
        icon={typeView}
        onSwitch={() => {
          getType();
        }}
      />
      {typeView === "view_list" ? (
        <ListView items={products} />
      ) : (
        <CardsView cards={products} />
      )}
    </div>
  );
};

export default Store;
