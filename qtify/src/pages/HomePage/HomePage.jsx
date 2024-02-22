import React from 'react';
import Section from '../../components/Section/Section';
import styles from "./HomePage.module.css"

const HomePage = ({topSongs,newSongs}) => {
  return (
    <div className={styles.mainDivHomePage}>
        <Section data={topSongs} caseName={"topSongs"}/>
        <Section data={newSongs} caseName={"newSongs"}/>
    </div>
  )
}

export default HomePage