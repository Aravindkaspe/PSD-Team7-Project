import styles from "../Styles/Category.module.scss";
import Card from "../Components/Card";
import Title from "../Components/Title";
import { useParams } from "react-router-dom";
import Products from "../Data/Products";
import CategoryItem from "../Components/CategoryItem";
import React from "react";

const Category = () => {
  return (
    <div>
      <h2>All Products</h2>
      <div>
        {Products.map(product => (
          <CategoryItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
