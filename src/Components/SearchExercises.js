import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../Utils/fetchData";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
function SearchExercises({
  setExercises,
  selectedBodyPart,
  setSelectedBodyPart,
}) {
  const [search, setSearch] = useState("");

  const [bodyPartsList, setBodyPartsList] = useState([]);

  useEffect(() => {
    const fetchbodyPartsList = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyPartsList(["all", ...bodyPartsData]);
    };
    fetchbodyPartsList();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`,
        exerciseOptions
      );
      console.log(search);
      console.log(exercisesData);
      setExercises(exercisesData);
      setSearch("");
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises you
        <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLocaleLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
        ></TextField>
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },

            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "5",
          }}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          selectedBodyPart={selectedBodyPart}
          setSelectedBodyPart={setSelectedBodyPart}
          data={bodyPartsList}
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
