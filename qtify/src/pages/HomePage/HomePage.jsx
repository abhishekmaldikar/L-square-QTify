import React from 'react';
import Section from '../../components/Section/Section';
import styles from "./HomePage.module.css";
import {Divider} from '@mui/material'
import { getGenres } from "../../api/fetchAlbums";

const HomePage = ({topSongs,newSongs,songs}) => {
  return (
    <div className={styles.mainDivHomePage}>
        <Section data={topSongs} caseName={"topSongs"}/>
        <Divider variant='fullWidth' sx={{backgroundColor : "#34c94b", marginTop : 5}} />
        <Section data={newSongs} caseName={"newSongs"}/>
        <Divider variant='fullWidth' sx={{backgroundColor : "#34c94b", marginTop : 5}} />
        <Section data={songs} caseName={"Songs"} getGenres={getGenres}/>
        <Divider variant='fullWidth' sx={{backgroundColor : "#34c94b", marginTop : 5}}/>
    </div>
  )
}

export default HomePage