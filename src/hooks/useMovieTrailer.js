import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const fetchTrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTION
      );
      const json = await data.json();

      const trailer =
        json.results.find(
          (video) => video.type === "Trailer"
        ) || null;

      dispatch(addTrailerVideo(trailer));
    };

    fetchTrailer();
  }, [movieId]);
};

export default useMovieTrailer;
