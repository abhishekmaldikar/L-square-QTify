import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { Button } from "@mui/material";
import { getTopAlbums } from "../../api/fetchAlbums";
import CardsSection from "../Card/CardsSection";

const AlbumsSection = () => {
  const [data , setData] = useState([]);

  async function fetchHelper (){
    const data = await getTopAlbums();
    setData(data)
  }

  useEffect(() => {
    fetchHelper()
  },[]);
  console.log(data,"this ran")

  return (
    <div className={styles.mainDiv}>
      <div className={styles.titleSection}>
        <h4>Top Albums</h4>
        <Button
          variant="text"
          sx={{
            backgroundColor: "#121212",
            borderRadius: "10px",
            color: "#34c94b",
            fontFamily: "Poppins",
          }}
        >
          Collapse
        </Button>
      </div>
      <div className={styles.gridSection}>
        {data.length && (
          data.map(({id,image,title,follows}) => (
            <CardsSection id={id} img ={image} title={title} follows={follows} key={id}/>
          ))
        )}
      </div>
    </div>
  );
};

export default AlbumsSection;
