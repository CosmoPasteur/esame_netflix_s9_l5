import { Component } from "react";
import VarieMovie from "./varieMovies";

class TrendingNow extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
      console.log("fetching data...");
      const resp = await fetch("http://www.omdbapi.com/?apikey=ce6d4979&s=naruto");
      if (resp.ok) {
        const moviesNar = await resp.json();
        console.log(moviesNar);
        this.setState({ movies: moviesNar.Search });
      } else {
        throw new Error("Ops!! Errore fetch dati!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return <VarieMovie movies={this.state.movies} />;
  }
}

export default TrendingNow;
