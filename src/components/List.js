import React, { Component } from 'react'
import Word from './Word';
import Form from './Form';
import Filter from './Filter';

import {connect} from 'react-redux';
import * as actioncreators from '../redux/actioncreators';
class List extends Component { 
  componentWillMount(){
    this.props.setWord();
  }
  getFiltermode(){
    const {words , filterMode} = this.props
    const newWords = words.filter(w => {
      if(filterMode === 'Show_Forgot' && w.isMemorized) return false;
      if(filterMode === 'Show_Memorized' && !w.isMemorized) return false;
      return true;
    })
    return newWords
  }
  render() {
    return (
      <div>
        {<Form />}
        {<Filter />}
        {this.getFiltermode().map(word => 
          <Word 
            word={word} 
            key={word._id}/>)}
      </div>
    )
  }
}
const mapStateToprops = state => ({words : state.words , filterMode : state.filterMode})
export default connect(mapStateToprops,actioncreators)(List);