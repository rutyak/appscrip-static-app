import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
    <section className={styles.discoverSection}>
      <h1 className={styles.heading}>DISCOVER OUR PRODUCTS</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </section>
    <hr style={{marginBottom:"30px"}}></hr>
    </>
  );
};

export default Header;
