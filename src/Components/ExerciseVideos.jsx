import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ excerciseVideos, name }) => {

    if(!excerciseVideos.length) return 'Loading ...'
      return (
    <Box sx={{ margin: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        excersise
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {excerciseVideos?.slice(0, 6).map((item, index) => (
          <a key={index}
            className="excercise-video"
             href= {`https://www.youtube.com/watch?v=${item.video.videoId}`}
             target="_blank"
             rel="noreferrer"
             style={{ textDecoration: 'none' }}
          >
           <img src={item.video.thumbnails[0].url}  alt={item.video.title}/>
           <Box>
             <Typography variant="h5" color="#000" >
                {item.video.title}
             </Typography>
             <Typography variant="h6" color="#000" >
                {item.video.channelName}
             </Typography>
           </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
