import React, { useState } from "react";
import styles from "./Section.module.css";
import { Button } from "@mui/material";
import CardsSection from "../Card/CardsSection";
import Carousel from "../Carousel/Carousel";

const Section = ({data , caseName }) => {

  const [state, setState] = useState(false)

  return (
    <div className={styles.mainDiv}>
      <div className={styles.titleSection}>
        {caseName === "topSongs" ? <h4>Top Albums</h4> : <h4>New Albums</h4>}
        <Button
          variant="text"
          sx={{
            backgroundColor: "#121212",
            borderRadius: "10px",
            color: "#34c94b",
            fontFamily: "Poppins",
          }}
          onClick={() => setState(!state)}
        >
          {
            state ? "Collapse" : "Show all"
          }
        </Button>
      </div>
      {
        state ? (
        <div className={styles.gridSection}>
        {data.length && (
          data.map(({id,image,title,follows}) => (
            <CardsSection id={id} img ={image} title={title} follows={follows} key={id}/>
          ))
        )}
      </div>
        ):(
          <Carousel data={data}/>
        )
      }
    </div>
  );
};

export default Section;
