import React from "react";
import styles from "./style.module.scss";

const ProductCard = (props) => {
  const { data } = props;
  return (
    <div className={`${styles["body"]}`}>
      <p>{data.title}</p>
      <p>{data.brand}</p>
      <p>{data.price}</p>
    </div>
  );
};

export default ProductCard;
