import React from 'react'
import styles from "./Button.module.css"
import { Button, Typography, Box } from "@mui/material";
const ButtonComponent = ({text}) => {
  return (
    <Button
        variant="contained"
        sx={{
          backgroundColor: "#121212",
          borderRadius: "10px",
        }}
      >
        <Typography sx={{
          color:"#34c94b"
        }} variant="button">{text}</Typography>
      </Button>
  )
}

export default ButtonComponent