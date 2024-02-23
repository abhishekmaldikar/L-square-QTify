import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ButtonComponent from "../Button/ButtonComponent"

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Logo />
      <SearchBar />
      <ButtonComponent text={"Give Feedback"}/>
    </nav>
  );
};

export default Navbar;
