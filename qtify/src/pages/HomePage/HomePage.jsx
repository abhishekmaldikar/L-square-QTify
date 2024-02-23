import React from 'react';
import Section from '../../components/Section/Section';
import styles from "./HomePage.module.css";
import { getGenres } from "../../api/fetchAlbums";

const HomePage = ({topSongs,newSongs,songs}) => {
  return (
    <div className={styles.mainDivHomePage}>
        <Section data={topSongs} caseName={"topSongs"}/>
        <Section data={newSongs} caseName={"newSongs"}/>
        <Section data={songs} caseName={"Songs"} getGenres={getGenres}/>
    </div>
  )
}

export default HomePage