import React, { Component } from 'react';
import * as actions from '../actions';
import Chat from '../components/chat';
import { connect } from 'react-redux';
import io from 'socket.io-client';

const socket = io.connect();

class ChatContainer extends Component {
  componentWillMount() {
  
   console.log('the props: ', this.props.getUserInfo);
  }
  render() {
    return (
      <Chat {...this.props} />
    );
  }
}
function mapStateToProps(state) {
  return {
      state
  }
}
export default connect(mapStateToProps, actions)(ChatContainer)
