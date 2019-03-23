import React, { Component } from 'react'

const mangmonhoc = ["Node" , "Android" , "iOS"]

export default class Loop extends Component {
  render() {
    return (
      <div>
         <h3>Loop Component</h3>
         {mangmonhoc.map(item => <p>{item}</p>)}
      </div>
    )
  }
}
