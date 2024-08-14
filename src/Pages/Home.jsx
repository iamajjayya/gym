import { Box } from "@mui/material";
import HeroBanner from "../Components/HeroBanner";
import SearchExercises from "../Components/SearchExcises"
import Exercises from "../Components/Exercises";
import { useState } from "react";

const Home = () => {
  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercise} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercise={setExercise} bodyPart={bodyPart} exercise={exercise}/>
    </Box>
  );
};

export default Home;
