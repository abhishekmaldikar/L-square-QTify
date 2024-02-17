import React from 'react'
import styles from "./SearchBar.module.css"
import { ReactComponent as SearchIcon } from "../../assets/assets/search-icon.svg"
import { Button, Typography, Box } from "@mui/material";

const SearchBar = () => {
  return(
    <Box
    sx={{
        display : "flex",
        alignItems : 'center'
    }}
    >
        <input className={styles.SearchBar} placeholder='Search a song of your choice'/>
        <button className={styles.searchIcon}>
            <SearchIcon />
        </button>
    </Box>
  )
}

export default SearchBar