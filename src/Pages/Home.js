import React, { useState } from "react";
import { Box } from "@mui/material";
import classes from "./Home.module.css";
import Exercises from "../Components/Exercises";
import SearchExercises from "../Components/SearchExercises";
import HeroBanner from "../Components/HeroBanner";
function Home() {
  const [selectedBodyPart, setSelectedBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
      ></SearchExercises>
      <Exercises
        setExercises={setExercises}
        selectedBodyPart={selectedBodyPart}
        exercises={exercises}
      ></Exercises>
    </Box>
  );
}

export default Home;
