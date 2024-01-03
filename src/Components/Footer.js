import React from "react";
import { GiLoveMystery } from "react-icons/gi";
import { Box, Stack, Typography } from "@mui/material";
import classes from "./Footer.module.css";
import Logo from "../assets/images/Logo-1.png";
function Footer() {
  return (
    <Box mt="80px" bgColor="#fff3f4">
      <Stack alignItems="center" gap="40px" px="40px" pt="24px">
        <img src={Logo} alt="Logo" width="200px" height="40px"></img>
        <Typography variant="h5" pb="40px" mt="20px">
          Made with{" "}
          <GiLoveMystery
            style={{ height: "30px", color: "#ff00ac", paddingTop: "10px" }}
          />{" "}
          by Dr.Saranyasri
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
