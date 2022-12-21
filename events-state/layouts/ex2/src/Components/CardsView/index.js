import ShopCard from "../ShopCard";

import style from "./style.module.css";

const CardsView = ({ cards }) => {
  return (
    <div className={style.container}>
      {cards.map((item) => (
        <ShopCard content={item} />
      ))}
    </div>
  );
};

export default CardsView;
