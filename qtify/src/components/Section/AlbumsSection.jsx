import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { Button } from "@mui/material";
import { getTopAlbums , getNewAlbums} from "../../api/fetchAlbums";
import CardsSection from "../Card/CardsSection";

const AlbumsSection = () => {
  const [topData , setTopData] = useState([]);
  const [newData , setNewData] = useState([]);

  async function fetchHelper (){
    const tData = await getTopAlbums();
    const nData = await getNewAlbums();
    setTopData(tData)
    setNewData(nData)
  }

  useEffect(() => {
    fetchHelper();
  },[]);


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
        {topData.length && (
          topData.map(({id,image,title,follows}) => (
            <CardsSection id={id} img ={image} title={title} follows={follows} key={id}/>
          ))
        )}
      </div>

      <div className={styles.titleSection}>
        <h4>New Albums</h4>
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
        {newData.length && (
          newData.map(({id,image,title,follows}) => (
            <CardsSection id={id} img ={image} title={title} follows={follows} key={id}/>
          ))
        )}
      </div>
    </div>
  );
};

export default AlbumsSection;
