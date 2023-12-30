import React, { useState, useEffect } from "react";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
function SearchExercises() {
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
          value=""
          onChange={(e) => {}}
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
    </Stack>
  );
}

export default SearchExercises;