import React, { Component } from 'react';
//import './App.css';

class Snippet extends Component {

  constructor (props) {
    super(props);
    // console.log(props.snippet);
    this.state = {
        snippet: props.snippet,
        isShowPre: false,
        isShowPost: false
    };
  }
  togglePre () {
    this.setState({
      isShowPre: !this.state.isShowPre
    })
  }
  togglePost () {
    this.setState({
      isShowPost: !this.state.isShowPost
    })
  }
    render () {
    return (
      <div style={{borderStyle: 'solid'}}>
        {!this.state.isShowPre && <i className="fa fa-caret-square-o-up" onClick={this.togglePre.bind(this)}  />}
        {this.state.isShowPre && <i className="fa fa-caret-square-o-down" onClick={this.togglePre.bind(this)}  />}
        {this.state.isShowPre && <PreContent text={this.state.snippet.pretext} />}
        <div>{this.state.snippet.text}</div> 
        {this.state.isShowPost && <PostContent text={this.state.snippet.posttext} />}
        {!this.state.isShowPost && <i className="fa fa-caret-square-o-down" onClick={this.togglePost.bind(this)}  />}
        {this.state.isShowPost && <i className="fa fa-caret-square-o-up" onClick={this.togglePost.bind(this)}  />}
      </div>
    )
  }
}

const PreContent = (props) => (
<div className='modal'>
      {props.text}
  </div>
)
const PostContent = (props) => (
  <div className='modal'>
      {props.text}
  </div>
  )
export default Snippet;
