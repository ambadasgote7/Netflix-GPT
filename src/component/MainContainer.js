import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoTrailer from './VideoTrailer';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if(!movies) return null;
    const mainMovie = movies[3];
    const {original_title, overview, id} = mainMovie;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoTrailer movieId={id}/>
    </div>
  )
}

export default MainContainer;