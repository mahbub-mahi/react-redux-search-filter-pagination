import React from "react";
import styles from "./style.module.scss";

const Paginate = ({ currentPage, setCurrentPage, totalPosts, postPerPage }) => {
  const totalPages = Math.ceil(totalPosts / postPerPage);

  let pages = [];

  for (let p = 1; p <= totalPages; p++) {
    pages.push(p);
  }

  return (
    <div className={`${styles["pagination-body"]}`}>
      <ul className="pagination">
        <li
          className={`page-item ${
            currentPage === 1 && `${styles["disabled"]}`
          }`}
        >
          <button
            className={`${styles["button-main"]} `}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            &laquo;
          </button>
        </li>
        {pages.map((page) => (
          <li key={page} onClick={() => setCurrentPage(page)}>
            <button
              className={`${styles["button-main"]}   ${
                page === currentPage && `${styles["active"]}`
              }`}
            >
              {page}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages && `${styles["disabled"]}`
          }`}
        >
          <button
            className={`${styles["button-main"]} `}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
