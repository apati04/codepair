import React, { Component, PropTypes } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';
import MessageList from './messageList';
import MessageCreator from './messageCreator';
import * as actions from '../actions';

import profile from './profile';
export default class Chat extends Component {
	constructor(props) {
    super(props);
    this.state = {
      typers: false,
      user: '',
      messages: '',
    }
  }
	componentDidMount(){
		this.socket = io();
		console.log('chat.js connected', profile);

	}

	render() {
	
    

	return (
	<Draggable>
			<div className="wrapper">
				<nav id="nav" className="nav">
					<div className="default-nav">
						<div className="main-nav">
							<div className="toggle"></div>
							<div className="main-nav-item"><a href="#" className="main-nav-item-link">{ this.fromUser }</a></div>
							<div className="options"></div>
						</div>
					</div>
				</nav>
				<div id="inner" className="inner">
					<MessageList />
				</div>
				<div id="bottom" className="bottom">
					<MessageCreator />
				<div id="send" className="send"></div>
					</div>
			</div>
	</Draggable>
	);
	}
}