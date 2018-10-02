import React, { Component } from 'react'
import ReviewItem from '../ReviewItem';

export default class ReviewList extends Component {
  render() {
    return (
      <div>
        {this.props.gem.reviews.map(review => <ReviewItem review={review} />)}
        <h5>Submit a review</h5>
        <form>
          <div class="form-group">
            <select class="form-control" name="" id="">
              <option disabled selected>Rate this product</option>
              <option>&#9733;</option>
              <option>&#9733;&#9733;</option>
              <option>&#9733;&#9733;&#9733;</option>
              <option>&#9733;&#9733;&#9733;&#9733;</option>
              <option>&#9733;&#9733;&#9733;&#9733;&#9733;</option>
            </select>
          </div>
          <div class="form-group">
            <textarea class="form-control" name="" id="" rows="5" placeholder="Write a brief review..."></textarea>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Email" />
          </div>
          <button type="button" class="btn btn-success float-right">Submit Review</button>
        </form>
      </div>
    )
  }
}
