
import React from 'react';
import { getMoviesByTitle } from '../api/movies';

export default class FindMovie extends React.Component {
  state = {
    title: '',
    movie: {},
  }

  async findMovie() {
    const { title } = this.state;
    const findMovie = await getMoviesByTitle(title);

    this.setState({
      movie: {
        title: findMovie.Title,
        description: findMovie.Plot,
        imgUrl: findMovie.Poster,
        imdbId: findMovie.imdbId,
      },
    });
  }

  handleChange(event) {
    // eslint-disable-next-line
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>{this.state.movie.title}</h1>
        <img src={this.state.movie.imgUrl} alt="poster" />
        <form>

          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <button onClick={this.findMovie} type="button">Find Movie</button>
          <button type="submit">Add movie to the list</button>
        </form>
      </div>
    );
  }
}
