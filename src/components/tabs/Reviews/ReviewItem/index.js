import React, { Component } from 'react';
import './main.css';

export default class ReviewItem extends Component {
  render() {
    const review = this.props.review;
    return (
      <div>
        <blockquote>
          <h6>{review.rating} | {review.body}</h6>
          &mdash; {review.author}
        </blockquote>
      </div>
    )
  }
}
