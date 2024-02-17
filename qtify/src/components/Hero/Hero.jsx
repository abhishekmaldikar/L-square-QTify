import React from "react";
import styles from "./Hero.module.css";
import HeadPhone from "../../assets/assets/hero_headphones.png";
import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <Typography variant="h4" color={"#ffffff"} fontFamily={"Poppins"} textAlign={"center"} >
        100 Thousand Songs, ad-free and Over thousands podcast episodes
      </Typography>
      {/* <h2 className={styles.HeroFont}>
        100 Thousand Songs, ad-free and Over thousands podcast episodes
      </h2> */}
      <img className={styles.HeroLogo} src={HeadPhone} alt="headphone" />
    </div>
  );
};

export default Hero;
