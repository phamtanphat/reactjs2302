import React, { Component } from 'react'
import {connect} from 'react-redux';
 class Filter extends Component {
    render() {
        return (
            <select
              className="word"
              value={this.props.filterMode}
              onChange={evt => this.props.dispatch({type : 'SET_FILTER_MODE' , filterMode : evt.target.value})}>
              <option value="Show_All">Show All</option>
              <option value="Show_Forgot">Show Forgot</option>
              <option value="Show_Memorized">Show Memorized</option> 
            </select>
        );
  }
}

const mapStateToprops = state => ({filterMode : state.filterMode});
export default connect(mapStateToprops)(Filter);