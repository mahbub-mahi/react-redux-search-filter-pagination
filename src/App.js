import React, { useEffect, useState } from "react";
import { fetchData } from "./api/mainData";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./components/ProductCard";
import Filter from "./components/Filter";
import Loader from "./components/Loader";
import Paginate from "./components/Pagination";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.Reducers);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const postPerPage = 8;
  const totalPosts = data.length;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const filterPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(fetchData());
  }, [data.length]);

  const handleChangeSearch = (e) => {
    if (e.target.value.length > 0) {
      setCurrentPage(1);
    }
    setSearch(e.target.value);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <Filter
            search={search}
            setSearch={setSearch}
            onChange={handleChangeSearch}
          />
          <div className="products-main">
            <div className="posts">
              {filterPosts
                .filter((post) => post.title.toLowerCase().includes(search))
                .map((post) => (
                  <ProductCard data={post} key={post.id} />
                ))}
            </div>
          </div>
          <div>
            {totalPosts > postPerPage && (
              <Paginate
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPosts={totalPosts}
                postPerPage={postPerPage}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
