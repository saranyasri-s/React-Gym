import React from "react";
import Loader from "./Loader";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "../Components/HorizontalScrollBar";
function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        {console.log(targetMuscleExercises)}
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
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
      <Typography variant="h3" mt={10} mb={5}>
        {console.log(targetMuscleExercises)}
        Exercises that uses the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollBar
            data={equipmentExercises}
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
