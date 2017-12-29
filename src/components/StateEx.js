import React from 'react';

class StateEx extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      header:"state 학습",
      content:"state 이해"
    }
  }

  modifyHeader(text){
    this.setState({
      header: "setState 이해"
    });
  }

  render(){
      return(
        <div>
          <h1>{this.state.header}</h1>
          <p>{this.state.content}</p>
          <button onClick={this.modifyHeader.bind(this)}>state 수정하기</button>
        </div>
      );
  }
}

export default StateEx;
