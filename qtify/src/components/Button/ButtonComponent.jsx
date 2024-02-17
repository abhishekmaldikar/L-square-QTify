import React from "react";
import styles from "./Button.module.css";
import { Button, Typography, Box } from "@mui/material";
const ButtonComponent = ({ text }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#121212",
        borderRadius: "10px",
        color: "#34c94b",
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
