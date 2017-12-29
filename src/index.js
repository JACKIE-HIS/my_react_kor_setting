import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

var destination = document.querySelector("#container");

// ReactDOM.render(<App  headTitle="리액트 공부하기"
//                       contentTitle = "prpos/state"
//                       content="props학습"/>,
//                       destination);

ReactDOM.render(<App />, destination);
