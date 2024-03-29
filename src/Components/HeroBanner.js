import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import classes from "./HeroBanner.module.css";
import HeroBannerImage from "../assets/images/banner.png";
function HeroBanner() {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        mb="23px"
        mt="30px"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br />
        and Repeat
      </Typography>
      <Typography mb={4} fontSize="22px" lineHeight="35px">
        Check out the most effective exercises
      </Typography>
      <Button
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
        variant="contained"
        color="error"
        href="#exercises"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200px"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"></img>
    </Box>
  );
}

export default HeroBanner;
