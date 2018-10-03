import React, { Component } from 'react'
import ReviewItem from '../ReviewItem';

export default class ReviewList extends Component {
  constructor(props) {
    
    super(props)

    this.state = {
      reviewList:  this.props.gem.reviews,
      selected: "Rate this product"
    };
  }

  submitReview = e => {
    e.preventDefault();
    const rating = e.target.elements.rating.value;
    const body = e.target.elements.body.value;
    const author = e.target.elements.author.value;
    const newReview = {
      id: Number(new Date()),
      createDate: Number(new Date()),
      rating,
      body,
      author
    };
    e.target.elements.rating.value = "";
    e.target.elements.body.value = "";
    e.target.elements.author.value = "";
    rating && body && author ? this.addReview(newReview) : alert("Invalid Review");
    console.log("Review submitted");
  }

  addReview = submittedReview => {
    let reviews = this.state.reviewList.slice(0);
    reviews.push(submittedReview);

    this.setState(({
      reviewList: reviews
    }))
  }

  render() {
    return (
      <div>
        {this.state.reviewList.map((review, key) => <ReviewItem reviewList={this.state.reviewList} key={review.id} review={review} />)}
        <h5>Submit a review</h5>
        <form onSubmit={this.submitReview}>
          <div className="form-group">
            <select className="form-control" name="rating" id="" defaultValue="0">
              <option value="0" disabled>Rate this product</option>
              <option value="1">&#9733;</option>
              <option value="2">&#9733;&#9733;</option>
              <option value="3">&#9733;&#9733;&#9733;</option>
              <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
              <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
            </select>
          </div>
          <div className="form-group">
            <textarea className="form-control" name="body" id="" rows="5" placeholder="Write a brief review..."></textarea>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="author" id="" aria-describedby="helpId" placeholder="Email" />
          </div>
          <button type="submit" className="btn btn-success float-right">Submit Review</button>
        </form>
      </div>
    )
  }
}
