import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Button, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Logo />
      <SearchBar />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#121212",
          borderRadius: "10px",
        }}
      >
        <Typography sx={{
          color:"#34c94b"
        }} variant="button">Give FeedBack</Typography>
      </Button>
    </nav>
  );
};

export default Navbar;
