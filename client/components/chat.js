import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Draggable, { DraggableCore } from 'react-draggable';
import MessageList from './messageList';
import MessageCreator from './messageCreator';
import * as actions from '../actions';
import MatchItem from './matchItem';
import io from 'socket.io-client';

let socket = io('http://localhost:3090');

export default class Chat extends Component {
	
	constructor(props, context) {
    super(props, context);
    this.state = {
      privateChannelModal: false,
      targetedUser: ''
    }
  }
  componentDidMount() {
    const { socket,  dispatch } = this.props;
    socket.emit('chat mounted', user);
   console.log('yup');
  }
  componentDidUpdate() {
    const messageList = this.refs.messageList;
    messageList.scrollTop = messageList.scrollHeight;
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
					<MessageList />
				</div>
				<div id="bottom" className="bottom">
					<MessageCreator />
				<div id="send" className="send"></div>
					</div>
			</div>
	</Draggable>
	)
	}
}
