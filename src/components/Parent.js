import React, { Component } from 'react'
import Child from './Child';
import {connect} from 'react-redux';

class Parent extends Component {   
  render() {
    return (
      <div>
          <h3>Value = {this.props.count} </h3>
          <Child />
      </div>
    )
  }
}

const mapStateToProps = state => ({count : state.value})
export default connect(mapStateToProps)(Parent)
