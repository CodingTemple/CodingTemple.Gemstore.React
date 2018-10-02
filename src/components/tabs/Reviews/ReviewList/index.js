import React, { Component } from 'react'
import ReviewItem from '../ReviewItem';

export default class ReviewList extends Component {
  render() {
    return (
      <div>
        {this.props.gem.reviews.map(review => <ReviewItem review={review} />)}
      </div>
    )
  }
}
