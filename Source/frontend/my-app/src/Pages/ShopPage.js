import styles from "../Styles/ShopPage.module.scss";
import Card from "../Components/Card";
import Title from "../Components/Title";
import bus from "../Images/3d brick.jpg"

const ShopPage = () => {
    const shopdata = [
        {
          id: 1,
          title: "Product 1",
          price: 29.99,
          category: "category1",
          description: "This is a description for product 1",
          image: {bus},
        },
        {
          id: 2,
          title: "Product 2",
          price: 39.99,
          category: "category2",
          description: "This is a description for product 2",
          image: "https://via.placeholder.com/150",
        },
        // Add more products as needed
      ];
    
    return (
      <section className={styles.home}>
        <div className={styles.container}>
          <div className={styles.row}>
            {shopdata.data && (
              <div className={styles.title}>
                <Title txt="all products" color="#171717" size={22} transform="uppercase" />
              </div>
            )}
          </div>
          <div className={styles.row}>
            {shopdata.data ? (
              shopdata.data.map((product, key) => <Card product={product} key={key} />)
            ) : (
              <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Title txt={shopdata.error} size={25} transform="uppercase" />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };

export default ShopPage;