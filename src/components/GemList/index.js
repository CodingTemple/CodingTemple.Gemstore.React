import React, { Component } from 'react'
import GemItem from '../GemItem';

export default class GemList extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <GemItem />
        </div>
      </div>
    )
  }
}
