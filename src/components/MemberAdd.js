import React from 'react';

export default class MemberAdd extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"",
      age:"",
      address: ""
    };
  }

  clickHandler(){
    this.props.onAdd(this.state.name, this.state.age, this.state.address);
    this.setState({
      name: "",
      age: "",
      address: ""
    });

    this.inputName.focus();
  }

  changeHandler(e){
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  keyPressHandler(e){
    if(e.charCode === 13){
      this.clickHandler();
    }
  }

  render(){
    return(
      <div className="memberInputArea">
        <h3>회원입력</h3>
        <p>
          <input className="inputName"
                 type="text"
                 name="name"
                 placeholder="이름"
                 value={this.state.name}
                 onChange={this.changeHandler.bind(this)}
                 ref={(ref)=>{this.inputName = ref}}/>

          <input className="inputAge"
                 type="text"
                 name="age"
                 placeholder="나이"
                 value={this.state.age}
                 onChange={this.changeHandler.bind(this)}/>

          <input className="inputAddress"
                 type="text"
                 name="address"
                 placeholder="주소"
                 value={this.state.address}
                 onChange={this.changeHandler.bind(this)}
                 onKeyPress={this.keyPressHandler.bind(this)}/>
         </p>
         <p>
            <button className="addBtn" onClick={this.clickHandler.bind(this)}>회원추가</button></p>
      </div>

    );
  }
}
