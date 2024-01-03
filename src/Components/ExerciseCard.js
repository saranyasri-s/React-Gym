import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
function ExerciseCard({ exercise }) {
  const navigate = useNavigate();
  // const h = useHistory();
  return (
    <div
      className="exercise-card"
      onClick={() => {
        const varurl = `/exercise/${exercise.id}`;
        console.log("Clicked on exercise card with ID:", exercise.id);
        navigate(varurl);
        // navigate("/url");
        navigate(0);
      }}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"></img>
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </div>
  );
}

export default ExerciseCard;
