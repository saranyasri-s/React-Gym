import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
function BodyPart({ bodypart, selectedBodyPart, setSelectedBodyPart }) {
  return (
    <Stack
      onClick={() => {
        setSelectedBodyPart(bodypart);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodypart === selectedBodyPart ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      ></img>
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {bodypart}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
