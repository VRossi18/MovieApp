import React, { Component } from 'react';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './styles.css';

export default class Card extends Component {
  state = {
    movies: []
  }

  async componentDidMount() {
      const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=fd5dbadeb0fc07b3a0c2b195a21a2ac4&language=en-US&page=1');
      this.setState({movies: response.data.results})
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="main-carousel">
        <Carousel 
          width={1750}
          centerMode={true}
          showArrows={true} 
          autoPlay={true} 
          infiniteLoop={true} 
          centerSlidePercentage={100}
          showStatus={false}
          showIndicators={false}
          interval={5000}
          centerSlidePercentage={15}
          selectedItem={10}>
            {movies.map(movie => (
              <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
                <p className="legend">{movie.title}</p>
              </div>
            ))}
        </Carousel>
      </div>
    );
  }
}