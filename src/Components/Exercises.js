import React, { useEffect, useState } from "react";
import classes from "./Exercises.module.css";
import ExerciseCard from "./ExerciseCard";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../Utils/fetchData";
function Exercises({ exercises, selectedBodyPart, setExercises }) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 5;
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behaviour: "smooth" });
  };
  console.log(exercises);
  console.log(selectedBodyPart + "  in exercises");
  useEffect(() => {
    const fetchExercisesdata = async () => {
      let exercisesdata = [];
      if (selectedBodyPart === "all") {
        exercisesdata = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesdata = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`,
          exerciseOptions
        );
      }
      console.log(exercisesdata);
      setExercises(exercisesdata);
    };
    fetchExercisesdata();
  }, [selectedBodyPart]);
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}></ExerciseCard>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 5 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          ></Pagination>
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
