import React from "react";
import styles from "./style.module.scss";

const Filter = ({ search, onChange }) => {
  return (
    <div className={`${styles["body"]}`}>
      <h4>Filter</h4>
      <div className="filters">
        <div className="search">
          <input
            type="text"
            value={search}
            onChange={onChange}
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
