import styles from "../Styles/BasketItem.module.scss";
import Title from "../Components/Title";
import GetIcon from "../Components/GetIcon";
import Quantity from "../Components/Quantity";
import { BasketContext } from "../Contexts/BasketContext";
import { useContext } from "react";

const BasketItem = ({ data }) => {
  const { basketItems, setBasketItems, setBasketTotal } = useContext(BasketContext);

  const removeItemFromBasket = () => {
    let arr = [...basketItems],
      removed = arr[arr.indexOf(data)].price * arr[arr.indexOf(data)].quantity;
    arr.splice(arr.indexOf(data), 1);
    setBasketItems(arr);
    setBasketTotal((total) => {
      return total - removed;
    });
  };

  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={data.image} alt="" />
      </div>
      <div className={styles.detail}>
        <div className={styles.title}>
          <Title txt={data.title} size={16} transform="capitalize" />
        </div>
        <div className={styles.priceContainer}>
          <small className={styles.singlePrice}>{data.price.toFixed(2)}</small>
          <small className={styles.quantityN}>{data.quantity}</small>
          <small className={styles.totalPrice}> {`${(data.price * data.quantity).toFixed(2)}`} INR</small>
        </div>
        <Quantity data={data} />
      </div>
      <div className={styles.removeItem}>
        <button type="button" onClick={removeItemFromBasket}>
          <GetIcon icon="BsDash" size={17} />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
