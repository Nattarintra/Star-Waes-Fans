import React, { Component } from 'react'
import Axios from 'axios';
//import List from './List';
import ListMovies from './ListMovies';
import Loader from './Loader';



export default class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],

    }
    this.getMovies = this.getMovies.bind(this);
  }
  //Sorted By Released Date
  reorderByDate = () => {
    // console.log(...movies.release_date);
    var movies = this.state.movies.map(item => ({ ...item }));
    movies.sort((a, b) =>
      a.release_date > b.release_date
        ? 1
        : b.release_date > a.release_date
          ? -1
          : 0
    );
    this.setState({ movies });
  };
  //Sorted By Episode ID
  reorderByEpisode = () => {
    //console.log(...movies.episode_id);
    var movies = this.state.movies.map(item => ({ ...item }));
    movies.sort((a, b) =>
      a.episode_id > b.episode_id ? 1 : b.episode_id > a.episode_id ? -1 : 0
    );
    this.setState({ movies });
  };
  // Request films HTTP server
  getMovies() {
    return Axios.get("https://swapi.co/api/films")
      .then((response) => {
        console.log(response.data.results);
        this.setState({
          movies: response.data.results
        })
      })
  }

  componentDidMount() {
    this.getMovies()

  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <div className="container">
          <div className="flex-box">
            <p className="mb-0 mr-2"><strong>Filter by: </strong></p>
            <button
              onClick={this.reorderByDate}
              type="button"
              className="btn btn-info btn-sm"
            >
              Release Date
          </button>
            <p className="mb-0 mx-2"> <strong>Or:</strong></p>
            <button
              onClick={this.reorderByEpisode}
              type="button"
              className="btn btn-info btn-sm"
            >
              Episode Number
          </button>
          </div>

          {/* display loader while fetching data  */}
          {
            this.state.movies.length === 0 ?
              <Loader /> :
              <ListMovies movies={movies} />
          }

        </div>
      </>
    )
  }
}
