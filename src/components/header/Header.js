import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <section className={styles.discoverSection}>
        <div className={styles.mobileNav}>
          <span style={{ color: "lightgray" }}>HOME</span> | <span>SHOP</span>
        </div>
        <div>
          <h1 className={styles.heading}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </section>
      <hr style={{ marginBottom: "30px" }}></hr>
    </>
  );
};

export default Header;
