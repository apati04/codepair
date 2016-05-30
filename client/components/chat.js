import React, { Component, PropTypes } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';
import MessageList from './messageList';
import MessageCreator from './messageCreator';
import * as actions from '../actions';
import user from './matchItem';
import { connect } from 'react-redux';



class Chat extends Component {
	constructor(props) {
    super(props);
    this.state = {
      privateChannelModal: false,
      targetedUser: ''
    }
  }
	// componentDidMount() {
	// 	const socket = io.connect();
 //    const { user, dispatch } = this.props;
 //    socket.emit('chat mounted', user);
 //    socket.on('new message', msg =>
 //      dispatch(actions.receiveMessage(msg))
 //    );
 //    socket.on('typing bc', user =>
 //      dispatch(actions.typing(user))
 //    );
 //    socket.on('stop typing bc', user =>
 //      dispatch(actions.stopTyping(user))
 //    );
 //  }
	// handleClickOnUser(user) {
 //    this.setState({ privateChannelModal: true, targetedUser: user });
 //  }
 //    handleSendDirectMessage() {
 //    const { dispatch, socket, channels, user } = this.props;
 //  }

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

function mapStateToProps(state) {
  return {
      messages: state.messages,
      user: state.auth.user,
      typers: state.typers,
  }
}
export default connect(mapStateToProps)(Chat)

