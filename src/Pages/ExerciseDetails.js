import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchData, exerciseOptions } from "../Utils/fetchData";
import classes from "./ExerciseDetails.module.css";
import Detail from "../Components/Detail";
import ExerciseVideos from "../Components/ExerciseVideos";

import SimilarExercises from "../Components/SimilarExercises";

function ExerciseDetails() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com/";
      const exercisedata = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exercisedata);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}></Detail>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
}

export default ExerciseDetails;
