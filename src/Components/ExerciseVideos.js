import React from "react";
import { Box, Stack, Typography } from "@mui/material";
function ExerciseVideos({ exerciseVideos, name }) {
  if (!exerciseVideos.length) {
    return <p>Loading</p>;
  }

  console.log(exerciseVideos + "bbbbb");
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch -
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>
        - exercise videos
      </Typography>

      {exerciseVideos && (
        <Stack
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
          sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
        >
          <a
            key={exerciseVideos[0].video.videoId}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${exerciseVideos[0].video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={exerciseVideos[0].video.thumbnails[0].url}
              alt={exerciseVideos[0].video.title}
            ></img>
          </a>
          <a
            key={exerciseVideos[1].video.videoId}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${exerciseVideos[1].video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={exerciseVideos[1].video.thumbnails[0].url}
              alt={exerciseVideos[1].video.title}
            ></img>
          </a>
          <a
            key={exerciseVideos[2].video.videoId}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${exerciseVideos[2].video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={exerciseVideos[2].video.thumbnails[0].url}
              alt={exerciseVideos[2].video.title}
            ></img>
          </a>
        </Stack>
      )}
    </Box>
  );
}

export default ExerciseVideos;
