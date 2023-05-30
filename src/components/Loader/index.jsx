import React from "react";
import styles from "./style.module.scss";

const Loader = () => {
  return (
    <div className={`${styles["spinner-container"]}`}>
      <div className={`${styles["loading-spinner"]}`}></div>
    </div>
  );
};

export default Loader;
