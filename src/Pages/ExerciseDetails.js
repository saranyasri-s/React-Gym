import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  fetchData,
  exerciseOptions,
  youtubeSearchOptions,
} from "../Utils/fetchData";
import classes from "./ExerciseDetails.module.css";
import Detail from "../Components/Detail";
import ExerciseVideos from "../Components/ExerciseVideos";

import SimilarExercises from "../Components/SimilarExercises";

function ExerciseDetails() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisedata = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exercisedata);

      const exerciseVideosData = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exercisedata.name}`,
        youtubeSearchOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
      const targetMuscleExercisesdata = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${exercisedata.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesdata);
      const equipmentExercisesdata = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${exercisedata.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesdata);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}></Detail>
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      {/* <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      /> */}
    </Box>
  );
}

export default ExerciseDetails;
