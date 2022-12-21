import ShopItem from "../ShopItem";
import style from "./style.module.css";

const ListView = ({ items }) => {
  return (
    <div className={style.container}>
      {items.map((item) => (
        <ShopItem content={item} />
      ))}
    </div>
  );
};

export default ListView;
