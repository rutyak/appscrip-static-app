import React from "react";
import styles from "./Navbar.module.css";
import {
  AppLogo,
  BurgerIcon,
  DropDownIcon,
  HeartIcon,
  ProfileIcon,
  SearchIcon,
  ShopIcon,
  TopNavbarIcon,
} from "../../../public/icons/Icons";

const Navbar = () => {
  return (
    <navbar className={styles.navbar}>
      <div className={styles.topBar}>
        <div className={styles.topItem}>
          <TopNavbarIcon /> Lorem ipsum dolor
        </div>
        <div className={styles.topItem}>
          <TopNavbarIcon /> Lorem ipsum dolor
        </div>
        <div className={styles.topItem}>
          <TopNavbarIcon /> Lorem ipsum dolor
        </div>
      </div>

      {/* Main Navbar */}
      <div className={styles.mainNavbar}>
        <div className={styles.topIcons}>
          <div className={styles.burgerLogo}>
            <div className={styles.burgerIcon}>
              <BurgerIcon />
            </div>
            <div>
              <AppLogo />
            </div>
          </div>

          <div className={styles.logo}>LOGO</div>

          <div className={styles.icons}>
            <SearchIcon />
            <HeartIcon />
            <ShopIcon />
            <div className={styles.profileIcon}>
              <ProfileIcon />
            </div>
            <div className={styles.languageDropdown}>
              ENG <DropDownIcon />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className={styles.navLinks}>
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>
      </div>
      <hr></hr>
    </navbar>
  );
};

export default Navbar;
