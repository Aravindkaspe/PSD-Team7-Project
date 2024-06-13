import styles from "../Styles/Header.module.scss";
import { Link } from "react-router-dom";
import GetIcon from "../Components/GetIcon";
import clsx from "clsx";
import CategoryItem from "./CategoryItem";
import useMakeRequest from "../hooks/useMakeRequest";
import { BasketContext } from "../Contexts/BasketContext";
import { useContext } from "react";

const Header = () => {
  const shopdata = [
    {
      id: 1,
      title: "Product 1",
      price: 29.99,
      category: "category1",
      description: "This is a description for product 1",
      image: "https://via.placeholder.com/150",
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
  const { basketItems, setBasketIsOpen } = useContext(BasketContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h2>The 3D Craft House</h2>
        </Link>
      </div>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/" onClick={(e) => e.preventDefault()} className={styles.a}>
                Categories
              </Link>
              <ul className={styles.subMenu}>{shopdata.data ? shopdata.data.map((cat, index) => <CategoryItem data={cat} key={index} />) : <div>{shopdata.error}</div>}</ul>
            </li>
            <li>
              <Link
                to="/"
                className={clsx(styles.basketBtn, styles.a)}
                onClick={(e) => {
                  e.preventDefault();
                  setBasketIsOpen((oldState) => !oldState);
                }}
              >
                <GetIcon icon="BsCart4" size={25} color="#ffffff" />
                {basketItems.length > 0 && <span className={styles.basketLength}> {basketItems.length} </span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
