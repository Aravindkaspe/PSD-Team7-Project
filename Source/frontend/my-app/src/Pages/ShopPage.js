import styles from "../Styles/ShopPage.module.scss";
import Card from "../Components/Card";
import Title from "../Components/Title";
import bus from "../Images/3d brick.jpg"

const ShopPage = () => {
    const shopdata = [
        { id: 1, title: 'Mandala Planter White Pearl', price: 51, category: 'Planter', description: 'White', image: {bus} },
        { id: 2, title: 'Mandala Stool Brown Wood', price: 544, category: 'Furniture', description: 'Brown', image: 'path/to/brown-stool.jpg' },
        { id: 3, title: 'Mandala Planters Clear', price: 51, category: 'Planter', description: 'Clear', image: 'path/to/clear-planter.jpg' },
      ];
    
      return (
        <section className={styles.home}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.title}>
                <Title txt="all products" color="#171717" size={22} transform="uppercase" />
              </div>
            </div>
            <div className={styles.row}>
              {shopdata.map((product, key) => <Card product={product} key={key} />)}
            </div>
          </div>
        </section>
      );
    };

export default ShopPage;