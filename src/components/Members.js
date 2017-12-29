import React from 'react';
import MemberInfo from './MemberInfo';
import MemberAdd from './MemberAdd';
import MemberModify from './MemberModify';

import update from 'react-addons-update';


export default class Members extends React.Component {
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
    let newState = update(this.state, {
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
      memberData: update(
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
      memberData: update(
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
