import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { Button } from "@mui/material";
import { getTopAlbums } from "../../api/fetchAlbums";
import CardsSection from "../Card/CardsSection";
import axios from "axios"

const AlbumsSection = () => {
  const [data , setData] = useState([]);

  // async function fetchHelper (){
  //   const data = await getTopAlbums();
  //   setData(data)
  // }

const getTopAlbums = async () =>{
    try {
        let response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
        setData(response.data)
    } catch (e) {
        console.log(e.response)
    }
}

  useEffect(() => {
    getTopAlbums()
  },[]);
  console.log(data,"this ran");

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
