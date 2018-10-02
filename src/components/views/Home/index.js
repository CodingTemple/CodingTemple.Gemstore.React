import React, { Component } from 'react'
import GemList from '../../GemList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <GemList
          gems={this.props.gems} 
          onAddToCart={this.props.onAddToCart}
        />
      </div>
    )
  }
}
