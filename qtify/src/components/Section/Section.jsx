import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { Button, Tabs, Tab } from "@mui/material";
import CardsSection from "../Card/CardsSection";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

const Section = ({ data, caseName, getGenres }) => {
  const [state, setState] = useState(false);
  const [title, setTitle] = useState("top");

  useEffect(() => {
    switch (caseName) {
      case "topSongs":
        setTitle("Top Albums");
        break;
      case "newSongs":
        setTitle("New Albums");
        break;
      case "Songs":
        setTitle("Songs");
        break;
      default:
        setTitle(null);
    }
  }, [caseName]);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.titleSection}>
        <h4>{title}</h4>
        {title === "Songs" ? null : (
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
            {state ? "Collapse" : "Show all"}
          </Button>
        )}
      </div>
      {state ? (
        <div className={styles.gridSection}>
          {data.length &&
            data.map(({ id, image, title, follows }) => (
              <CardsSection
                id={id}
                img={image}
                title={title}
                follows={follows}
                key={id}
              />
            ))}
        </div>
      ) : title === "Songs" ? (
        <>
          <Filters getGenres={getGenres} data={data}/>
        </>
      ) : (
        <Carousel data={data} />
      )}
    </div>
  );
};

export default Section;
