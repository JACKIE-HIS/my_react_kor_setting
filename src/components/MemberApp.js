class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           memberData:[
                    {name:"홍길동", age:"24", address:"서울시 강남구"},
                    {name:"장길산", age:"27", address:"인천시 연수구"},
                    {name:"임꺽정", age:"22", address:"서울시 용산구"},
                    {name:"일지매", age:"34", address:"부산시 해운대구"}
            ],
           selectedKey: -1,
           selectedMember: {
              name:"",
              age: "",
              address: ""
           }
        };
    }

  addMember(name, age, address){
    let newState = React.addons.update(this.state, {
      memberData: {
        $push: [{"name": name, "age": age, "address":address}]
      }
    });
    this.setState(newState);
  }

  onSelect(key){
    if(key == this.state.selectedKey){
      this.setState({
        selectedKey:-1,
        selectedMember:{
          name: "",
          age: "",
          address: ""
        }
      });
      return;
    }
    this.setState({
      selectedKey : key,
      selectedMember: this.state.memberData[key]
    });
  }

  isSelected(key){
    if(this.state.selectedKey == key){
      return true;
    }else{
      return false;
    }
  }
  deleteMember() {
    if(this.state.selectedKey == -1){
      return;
    }
    this.setState({
      memberData: React.addons.update(
        this.state.memberData,
        {
          $splice: [[this.state.selectedKey, 1]]
        }
      ),
      selectedKey: -1,
      selectedMember:{
        name:"",
        age:"",
        address:""
      }
    });
  }

  modifyMember(name, age, address){
    this.setState({
      memberData: React.addons.update(
              this.state.memberData,
              {
                  [this.state.selectedKey] : {
                      name: {$set: name},
                      age: {$set: age},
                      address: {$set: address}
                  }
              }
      )//,
      // selectedMember:{
      //   name:name,
      //     age:age,
      //     address:address
      // }
    });
  }

  render(){
        return(
            <div className="memberListArea">
                <h1>멤버 리스트</h1>
                <ul className="listArea">
                    {this.state.memberData.map((member, i) => {

                        return (<MemberInfo name={member.name}
                                            age={member.age}
                                            address={member.address}
                                            key={i}
                                            memberKey={i}
                                            isSelected={this.isSelected.bind(this)(i)}
                                            onSelect={this.onSelect.bind(this)}/>
                        );
                    })}
                </ul>
                <MemberAdd onAdd={this.addMember.bind(this)}/>
                <MemberModify onModify={this.modifyMember.bind(this)}
                              onDelete={this.deleteMember.bind(this)}
                              isSelected={(this.state.selectedKey !=-1)}
                              member={this.state.selectedMember}/>
            </div>
        );
    }
}

class MemberInfo extends React.Component{
  clickHandler(){
    this.props.onSelect(this.props.memberKey);
  }
  render(){
    let changeStyle = isSelect => {
      if(!isSelect) return;

      let listStyle={
        backgroundColor: '#a55',
        fontWeight:'bold',
        color:'#fff'
      }
      return listStyle;
    };

    return(
     <li className="memberList"
       style={changeStyle(this.props.isSelected)}
       onClick={this.clickHandler.bind(this)}>
        {this.props.name} {this.props.age} {this.props.address}
      </li>
    );
  }
}

class MemberAdd extends React.Component{
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
  }

  changeHandler(e){
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
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
                 onChange={this.changeHandler.bind(this)}/>

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
                 onChange={this.changeHandler.bind(this)}/>
         </p>
         <p>
            <button className="addBtn" onClick={this.clickHandler.bind(this)}>회원추가</button>                </p>
      </div>

    );
  }
}

// class MemberDelete extends React.Component{
//   clickHandler(){
//     this.props.onDelete();
//   }

//   render(){
//     return(
//       <button className="deleteBtn" onClick={this.clickHandler.bind(this)}>
//         선택회원삭제
//       </button>
//     );
//   }
// }

class MemberModify extends React.Component{
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



class MemberApp extends React.Component{
  render(){
    return(
      <Members />
    );
  }
}

ReactDOM.render(
  <MemberApp />,
  document.querySelector("#container")
);
