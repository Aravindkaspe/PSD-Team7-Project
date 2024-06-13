import AddToBasketBtn from "../Components/AddToBasketBtn";
import GetIcon from "../Components/GetIcon";
import Quantity from "../Components/Quantity";
import Title from "../Components/Title";
import { BasketContext } from "../Contexts/BasketContext";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../Styles/Detail.module.scss";

const Detail = () => {
  const { slug } = useParams();
  let id = slug.split("-");
  id = id[id.length - 1];

  const data = {
    id: id,
    title: "Sample Product",
    price: 49.99,
    category: "sample-category",
    description: "This is a sample product description.",
    image: "https://via.placeholder.com/150",
    rating: { rate: 4.5 },
  };

  const { basketItems } = useContext(BasketContext);

  const setStars = (rate) => {
    let elements = [];
    let controlNumber = 0;
    for (let i = 1; i <= 5; i++) {
      if (i <= parseInt(rate)) {
        controlNumber = parseInt(rate) - i;
        elements.push(<GetIcon icon="BsFillStarFill" color="#F0A500" size={20} key={i} />);
      } else if (controlNumber === 0) {
        controlNumber = 1;
        elements.push(<GetIcon icon="BsStarHalf" color="#F0A500" size={20} key={i} />);
      } else {
        elements.push(<GetIcon icon="BsStar" color="#F0A500" size={20} key={i} />);
      }
    }

    return elements;
  };

  const getItemFromBasket = (data) => {
    let filter = basketItems.length > 0 && basketItems.filter((item) => item.id === data.id)[0];
    if (filter) {
      return filter;
    } else {
      return data;
    }
  };

  return (
    <section className={styles.detail}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.img}>
            <img src={data.image} alt="" />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>
              <Title txt={data.title} transform="uppercase" size={20} />
            </div>
            <div className={styles.category}>
              <Link to={`/category/${data.category}`} style={{ color: "#0E3EDA" }}>
                {data.category}
              </Link>
            </div>
            <div className={styles.rating}>
              <div className={styles.stars}>{setStars(data.rating.rate)}</div>
            </div>
            <div className={styles.price}>
              <p>
                {data.price.toFixed(2)} <small>TRY</small>
              </p>
            </div>
            <div className={styles.addToBasketAndQuantity}>
              <div className={styles.quantityBox}>
                <Quantity data={getItemFromBasket(data)} />
              </div>
              <AddToBasketBtn data={data} />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <Title txt="Description" size={20} transform="capitalize" />
          <p className={styles.desc}>{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;