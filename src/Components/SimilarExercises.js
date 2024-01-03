import React from "react";
import Loader from "./Loader";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "../Components/HorizontalScrollBar";
function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">
        {console.log(targetMuscleExercises)}
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative", m: "2rem" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar
            data={targetMuscleExercises}
            isBodyParts={false}
          ></HorizontalScrollBar>
        ) : (
          // <p>tduytduj</p>
          <Loader></Loader>
        )}
      </Stack>
    </Box>
  );
}

export default SimilarExercises;
