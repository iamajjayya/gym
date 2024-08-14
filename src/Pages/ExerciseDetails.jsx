import { Box } from "@mui/material";
import { excerciseOptions, fetchData , Youtubeoptions } from '../utils/Fetchdata';
import Detail from "../Components/Detail";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercises from "../Components/SimilarExercises";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [excerciseVideos, setExcerciseVideos] = useState([])
  const [targetMuscleExcercises,  setTargetMuscleExcerises] = useState([]);
  const [equipmentExcercises, setEquipmentExcercises] = useState([]);


  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDburl = 'https://exercisedb.p.rapidapi.com/exercises/exercise';
      
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDburl}/${id}`, excerciseOptions);
      setExerciseDetail(exerciseDetailData);
     
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,Youtubeoptions)

      setExcerciseVideos(exerciseVideosData.contents)


      const targetMuscleExercisesData = await fetchData(`${exerciseDburl}/exercises/target/${exerciseDetailData.target}`, excerciseOptions);
        setTargetMuscleExcerises(targetMuscleExercisesData);

        // Fetching equipment-based exercises
        const equipmentExercisesData = await fetchData(`${exerciseDburl}/exercises/equipment/${exerciseDetailData.equipment}`, excerciseOptions);
        setEquipmentExcercises(equipmentExercisesData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos   excerciseVideos = {excerciseVideos} name={exerciseDetail.name} />
      {/* <SimilarExercises  targetMuscleExcercises={targetMuscleExcercises} equipmentExcercises={equipmentExcercises} /> */}
    </Box>
  );
};

export default ExerciseDetails;
