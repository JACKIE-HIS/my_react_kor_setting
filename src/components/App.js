// Ex 소스
// import React from 'react';
// import Header from './Header';
// import Content from './Content';
// import RandomNum from './RandomNum'
//
// class App extends React.Component{
//   constructor(props){
//     super(props);
//
//     this.state ={
//           rNum: Math.round(Math.random()*1000)
//     };
//     this.updateNum = this.updateNum.bind(this);
//   }
//
//   updateNum(randomNum){
//     this.setState({
//       rNum: randomNum
//     });
//   }
//
//
//   render(){
//     return(
//       <div>
//         <Header title={this.props.headTitle} />
//         <Content title={this.props.contentTitle}
//           content={this.props.content}/>
//         <RandomNum number={this.state.rNum}
//           onUpdate={this.updateNum}/>
//       </div>
//     );
//   }
// }
//
// App.defaultProps ={
//   headTitle: '리액트 공부하기',
//   contentTitle: 'props/state',
//   content: 'props학습'
// }
//
// export default App;

// Ex 데이터배열 수정 삭제 추가

import React from 'react';
import Members from './Members';

class App extends React.Component{
  render(){
    return (
      <Members />
    );
  }
}

export default App;
