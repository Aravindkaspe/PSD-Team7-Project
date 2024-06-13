import styles from "../Styles/Category.module.scss";
import Card from "../Components/Card";
import Title from "../Components/Title";
import { useParams } from "react-router-dom";

const Category = () => {
  const { slug } = useParams();
  const data = [
    {
      id: 1,
      title: "Product 1",
      price: 29.99,
      category: slug,
      description: "This is a description for product 1",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Product 2",
      price: 39.99,
      category: slug,
      description: "This is a description for product 2",
      image: "https://via.placeholder.com/150",
    },
    // Add more products as needed
  ];

  return (
    <section className={styles.category}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.title}>
            <Title txt={slug} color="#171717" size={22} transform="uppercase" />
          </div>
        </div>
        <div className={styles.row}>
          {data.map((product, key) => <Card product={product} key={key} />)}
        </div>
      </div>
    </section>
  );
};

export default Category;
