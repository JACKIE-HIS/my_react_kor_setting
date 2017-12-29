import React from 'react';
import ReactDOM from 'react-dom';

class RandomNum extends React.Component{
  constructor(props){
    super(props);
    this.updateNum = this.updateNum.bind(this);
  }

  updateNum(){
    let rNum = Math.round(Math.random()*1000);
    this.props.onUpdate(rNum);
  }

  render(){
    return(
      <div>
        <h1>RANDOM NUMBER: {this.props.number}</h1>
        <button onClick={this.updateNum}>랜덤값 발생</button>
      </div>
    );
  }
}

export default RandomNum;
