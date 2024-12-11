import { useEffect, useState } from "react";
import styles from "./Body.module.css";
import { HeartIcon, RecommendedIcon, ShowFilter } from "../../../public/icons/Icons";

function Body() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const json = await res.json();
    setData(json.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.bodyTop}>
          <span>{data.length} ITEMS</span>
          <a href="#" className={styles.filterLink}>
            <ShowFilter /> SHOW FILTER
          </a>
        </div>
        <select className={styles.sortDropdown}>
          <option>RECOMMENDED</option> <RecommendedIcon/>
        </select>
      </div>
      <div className={styles.grid}>
        {data.map((product) => (
          <div className={styles.card} key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.image}
            />
            <p className={styles.title}>{product.title}</p>
            <div className={styles.signInHeart}>
              <span style={{ fontSize: "12px" }}>
                <span style={{ textDecoration: "underline", fontSize: "12px" }}>
                  Sign in
                </span>{" "}
                or Create an account to see pricing
              </span>
              <HeartIcon/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
