import React from 'react';


export default class MemberInfo extends React.Component{
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
