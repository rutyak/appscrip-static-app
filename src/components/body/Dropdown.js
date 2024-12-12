import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import {
  DropDownIcon,
  RecommentedInnerIcon,
} from "../../../public/icons/Icons";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownBtn} onClick={toggleDropdown}>
        RECOMMENDED <DropDownIcon />
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <label className={styles.dropdownMain}>
              <RecommentedInnerIcon/> <p>RECOMMENDED</p>
          </label>
          <div className={styles.dropdownItem}>NEWEST FIRST</div>
          <div className={styles.dropdownItem}>POPULAR</div>
          <div className={styles.dropdownItem}>PRICE : HIGH TO LOW</div>
          <div className={styles.dropdownItem}>PRICE : LOW TO HIGH</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
