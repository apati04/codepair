	import React, { Component } from 'react';
	import { connect } from 'react-redux';
	import { Link } from 'react-router';
	import Draggable, { DraggableCore } from 'react-draggable';
	import MessageList from './messageList';
	import MessageCreator from './messageCreator';
	import * as actions from '../actions';

	export default class Chat extends Component {

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
