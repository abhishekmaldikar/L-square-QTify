import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { Button } from "@mui/material";
import { getTopAlbums } from "../../api/fetchAlbums";
import CardsSection from "../Card/CardsSection";
import axios from "axios"

const AlbumsSection = () => {
  const [topData , setTopData] = useState([]);
  const [newData , setNewData] = useState([]);

  // async function fetchHelper (){
  //   const data = await getTopAlbums();
  //   setData(data)
  // }

const getTopAlbums = async () =>{
    try {
        let response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
        setTopData(response.data)
    } catch (e) {
        console.log(e.response)
    }
}

const getNewAlbums = async () =>{
  try {
      let response = await axios.get("https://qtify-backend-labs.crio.do/albums/new")
      setNewData(response.data)
  } catch (e) {
      console.log(e.response)
  }
}

  useEffect(() => {
    getTopAlbums();
    getNewAlbums();
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
