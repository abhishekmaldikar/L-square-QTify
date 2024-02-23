import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";


const CardsSection = ({img,title,follows,likes}) => {
  return (
    <div >
      <div className={styles.albumCard}>
        <img className={styles.cardImg} src={img} alt="Album-Image" />
        <div className={styles.cardContain}>
          <Chip label={follows ? `${follows} Follows` : `${likes} likes`} variant="outlined" sx={{
            background : "black",
            color : "white",
            marginTop : "2px",
            marginLeft : "1px"
          }} />
        </div>
      </div>
      <div className={styles.albumName}>
      <h6 style={{margin : 0}}>{title}</h6>
      </div>
    </div>
  );
};

export default CardsSection;
