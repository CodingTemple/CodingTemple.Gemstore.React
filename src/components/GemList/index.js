import React, { Component } from 'react'
import GemItem from '../GemItem';

import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    gems: state.default
  };
}

class GemList extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {this.props.gems.map((gem, key) => <GemItem key={gem.id} gem={gem} onAddToCart={this.props.onAddToCart} />)}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(GemList)