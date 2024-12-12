import { useEffect, useState } from "react";
import styles from "./Body.module.css";
import { HeartIcon, ShowFilter } from "../../../public/icons/Icons";
import FilterSidebar from "../filter/FilterSideBar";
import Dropdown from "./Dropdown";

function Body() {
  const [data, setData] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setData(data.products);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.bodyTop}>
          <span style={{fontWeight:"600"}}>{data.length} ITEMS</span>
          <button className={styles.filterLink} onClick={toggleFilter}>
            <ShowFilter /> {isFilterOpen ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>
        <div className={styles.mobileFilter}>
          <span>Filter</span>|
        </div>
        <Dropdown/>
      </div>
      <div className={styles.filterStyle}>
        {isFilterOpen && (
          <div>
            <FilterSidebar />
          </div>
        )}
        <div
          className={styles.grid}
          style={{ width: isFilterOpen ? "80%" : "100%" }}
        >
          {isLoading ? (
            <div className={styles.loader}>Loading...</div>
          ) : (
            data.map((product) => (
              <div className={styles.card} key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className={styles.image}
                />
                <p className={styles.title}>{product.title}</p>
                <div className={styles.signInHeart}>
                  <span style={{ fontSize: "12px" }}>
                    <span
                      style={{ textDecoration: "underline", fontSize: "12px" }}
                    >
                      Sign in
                    </span>{" "}
                    or Create an account to see pricing
                  </span>
                  <HeartIcon />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
