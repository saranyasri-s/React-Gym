import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "../Components/HorizontalScrollBar";
function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length && (
          <HorizontalScrollBar
            data={targetMuscleExercises}
          ></HorizontalScrollBar>
        )}
      </Stack>
    </Box>
  );
}

export default SimilarExercises;
