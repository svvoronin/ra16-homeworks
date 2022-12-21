import style from "./style.module.css";

const ShopCard = ({ content }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.name}>{content.name}</div>
      <div className={style.color}>{content.color}</div>
      <img className={style.image} src={content.img} alt={content.name} />
      <div className={style.infoContainer}>
        <span className={style.price}>&#36;&nbsp;{content.price}</span>
        <button className={style.addBtn}>Add to card</button>
      </div>
    </div>
  );
};

export default ShopCard;
