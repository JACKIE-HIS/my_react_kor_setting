import React from 'react';

export default class MemberModify extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isModify: false ,
      name:"",
      age: "",
      address:""
    }
  }

  toggleHandler(){
    if(!this.state.isModify){
       this.setState({
         name:this.props.member.name,
         age:this.props.member.age,
         address:this.props.member.address
       });
       }else{
        this.modifyHandler();
       }
    this.setState({
      isModify:!this.state.isModify
    });
  }

  modifyHandler(){
    this.props.onModify(this.state.name, this.state.age, this.state.address);
  }

  // componentWillReceiveProps(nextProps){
  //   this.setState({
  //     name: nextProps.member.name,
  //     age: nextProps.member.age,
  //     address:nextProps.member.address
  //   });
  // }

  // clickHandler(){
  //   if(!this.props.isSelected){
  //     return;
  //   }
  //   this.props.onModify(this.state.name, this.state.age, this.state.address);
  // }

  changeHandler(e){
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render(){
    const selectedMember=(
      <div>
    <p>
      {this.props.member.name} {this.props.member.age} {this.props.member.address}
    </p>
        </div>
    );

    const modifyMode=(
     <p>
          <input className="m_inputName"
                 type="text"
                 name="name"
                 placeholder="이름"
                 value={this.state.name}
                 onChange={this.changeHandler.bind(this)}/>

          <input className="m_inputAge"
                 type="text"
                 name="age"
                 placeholder="나이"
                 value={this.state.age}
                 onChange={this.changeHandler.bind(this)}/>

          <input className="m_inputAddress"
                 type="text"
                 name="address"
                 placeholder="주소"
                 value={this.state.address}
                 onChange={this.changeHandler.bind(this)}/>
        </p>
    );

    const display = this.state.isModify ? modifyMode : selectedMember;

    const nonDisplay = (<div>선택된 멤버가 없습니다!!</div>);

    return(
      <div className="modifyArea">
        <h3>회원정보</h3>
       {this.props.isSelected ?  display : nonDisplay}
        <button className="modifyBtn"
                 onClick={this.toggleHandler.bind(this)}>
            {this.state.isModify ? '수정하기' : '회원정보수정'}
        </button>
        <button className="deleteBtn" onClick={this.props.onDelete}>
            회원삭제
        </button>
      </div>
    );
  }
}
