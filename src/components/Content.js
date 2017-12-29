import React from 'react';

export default class Content extends React.Component{
  render(){
    return(
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

Content.propTypes ={
  title: React.PropTypes.string,
  content: React.PropTypes.string.isRequired
}

// export default Content;
