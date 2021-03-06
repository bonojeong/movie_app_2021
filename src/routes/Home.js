import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css"

class Home extends React.Component{
state = {
  isLoading: true,
  movies: []
};
getMovies = async () => {
  // axios라는 비동기함수를 이용해서 await 시킨다 get() 을 가져올때까지 기다리는 것을 !!
  const {
    data: { 
      data : {movies}}
  } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?/sort_by=rating");
  this.setState({movies, isLoading: false})
};
componentDidMount() {
  this.getMovies();
}
  render() {
    const {isLoading, movies } = this.state; 
    return (
    <section className="container">
      {isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
      ) : ( 
        <div className="movies">
          {movies.map(movie => (
          <Movie 
            key={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image} 
            genres={movie.genres}
          />
        ))}
        </div>
      )}
    </section>
  );
}}
export default Home;
