import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'R6FD3DFnKvPYMVYyVgIOcEewVbT4ArnR';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

<<<<<<< HEAD
class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()

     this.state = {
      reviews: []
    };
  }

   componentDidMount() {
    fetch(URL)
    	.then(response => response.json())
      .then(response => this.setState({ reviews: response.results }));
  }

   render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

 export default LatestMovieReviewsContainer
=======
export default class LatestMovieReviewsContainer extends React.Component {
    constructor() {
      super()
      
      this.state = {
        reviews: []
      }
    }
    
    componentDidMount() {
      fetch(URL)
      .then(response => response.json())
        .then(response =. this.setState({ reviews: response.results }));
    }
    
    render() {
      return (
        <div className="latest-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
  
}
>>>>>>> 024f3a700ca8966587d75a8b37663970f9238ba3
