import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actioncreators from '../redux/actioncreators';

class Word extends Component {
  constructor(props){
    super(props);
    this.toggleWord = this.toggleWord.bind(this);
  }
  toggleWord(){
    const {_id , isMemorized} = this.props.word;
    this.props.toggleWord(_id , isMemorized );
  }
  render() {
    const { word } = this.props;
    return (
      <div className="word" key={word._id}>
        <div className="word-container">
          <h3 className="text-success">{word.en}</h3>
          <h3 className="text-danger">
            {word.isMemorized ? '----' : word.vn}
          </h3>
        </div>
      <div className="btn-container">
          <button
            className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}
            onClick={this.toggleWord}>
            {word.isMemorized ? 'Forgot' : 'Memorized'}
          </button>
          <button
            className="btn btn-warning"
            onClick={() =>this.props.removeWord(word._id)}>
            Remove
          </button>
        </div>
      </div>  
    );
  }
}

export default connect(null,actioncreators)(Word);
