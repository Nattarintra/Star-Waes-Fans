import React, { Component } from 'react'
import Characters from './Characters';


export default class ListMovies extends Component {

    render() {
        const movies = this.props.movies;

        return (
            <>
                <div className="row">
                    {movies.map((movie, keys) => {
                        return (
                            <div className="col-sm-6 col-md-3 my-1" key={keys}>
                                <div className="card">
                                    <div className="img__wrap">
                                        <img
                                            width="100%"
                                            src={`/img/${movie.title}.jpeg`}
                                            className="card-img-top img__img"
                                            alt={movie.title}
                                        />

                                        <div className="card-body">
                                            <h5 className="card-title text-truncate">{movie.title}</h5>
                                            <p className="card-text">
                                                <small className="text-muted">{`Episode Nº: ${
                                                    movie.episode_id
                                                    }`}</small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">{`Release Date: ${
                                                    movie.release_date
                                                    }`}</small>
                                            </p>

                                            <p className="card-text charname">Characters:</p>
                                            {
                                                movie.characters.map((char, i) => {
                                                    console.log(char)
                                                    return (
                                                        <div key={i}>
                                                            <ul className="card-text charname">
                                                                <Characters charName={char} />
                                                            </ul>

                                                        </div>
                                                    )
                                                })
                                            }

                                            <div className="img__description_layer">
                                                <h5 className="card-title text-truncate">{movie.title}</h5>
                                                <p className="card-text img__description">
                                                    <small className="details">{`Opening Crawl: ${
                                                        movie.opening_crawl
                                                        }`}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div> {/** End hover img__wrap */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        )
    }
}
