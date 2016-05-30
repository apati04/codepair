import React, { Component } from 'react';
import * as actions from '../actions';
import Chat from '../components/chat';
import { connect } from 'react-redux';
import profile from '../components/matchItem'


class ChatContainer extends Component {
    componentDidMount(){
    this.socket = io();
    console.log(this.socket.id);
  }

  render() {
   
    return (
      <Chat {...this.props} socket={this.socket} />
    );
  }
}
function mapStateToProps(state) {
  return {
      userId: state.profile.id,
      user: state.profile.name,
      matches: state.cards.matches
  }
}
export default connect(mapStateToProps, actions)(ChatContainer)
