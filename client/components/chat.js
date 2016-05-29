import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Draggable, { DraggableCore } from 'react-draggable';


export default class Chat extends Component {
  constructor(props){
    super(props);
    // this.state= {
    //   createMessage: { fromID, toID, message }
    // }
    console.log(this.props);
  }

  render() {
    return (
      <Draggable>
          <div className="wrapper">
            <nav id="nav" className="nav">
              <div className="default-nav">
                <div className="main-nav">
                  <div className="toggle"></div>
                  <div className="main-nav-item"><a href="#" className="main-nav-item-link">Andrew</a></div>
                  <div className="options"></div>
                </div>
              </div>
            </nav>
            <div id="inner" className="inner">
              <div id="content" className="content"></div>
              innter
            </div>
            <div id="bottom" className="bottom">
              bottom
              <textarea id="input" name="message" onChange={this.onChange.bind(this)} onKeyDown= {this.onKeyDown.bind(this)} className="input"></textarea>
              <div id="send" className="send">Button</div>
            </div>
          </div>
      </Draggable>
    )
  }
  onChange(event, value) {
    this.setState({text: event.target.value});
  }
  onKeyDown(event) {
    // keyboard code for Enter key
    if(event.keyCode === 13) {
      let text = this.state.text.trim();
      if (text) {
        this.props.actions.createMessage(text, this.props.fromID);
      }
      this.setState({text: ''});
    }
  }
}