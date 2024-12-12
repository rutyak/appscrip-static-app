import { useEffect, useState } from "react";
import styles from "./Body.module.css";
import { HeartIcon, ShowFilter } from "../../../public/icons/Icons";
import FilterSidebar from "../filter/FilterSideBar";

function Body() {
  const [data, setData] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 
  
  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const json = await res.json();
    setData(json.products);
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
          <span>{data.length} ITEMS</span>
          <button className={styles.filterLink} onClick={toggleFilter}>
            <ShowFilter /> {isFilterOpen ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>
        <div className={styles.mobileFilter}><span>Filter</span>|</div>
        <div className={styles.dropdownContainer}>
          <select
            id="dropdown"
            className={styles.dropdown}
            defaultValue="recommended"
          >
            <option value="recommended">Recommended</option>
            <option value="newest">Newest First</option>
            <option value="popular">Popular</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="low-to-high">Price: Low to High</option>
          </select>
        </div>
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
