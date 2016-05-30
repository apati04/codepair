import React,{ Component, PropTypes } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import moment from 'moment';
import profile from './profile';

export default class MessageCreator extends Component {

	 constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      typing: false
  }
  }
  onKeyDown(event) {
    const { socket, message , typing} = this.props;
    console.log('the this props ,: ', this.props);
    console.log(this.context);
    const text = event.target.value.trim();
    if (event.which === 13) {
      event.preventDefault();
      var data = {
        message: text,
        user: typing,
        time: moment.utc().format('lll')
      };
      socket.emit('new message', newMessage);
      socket.emit('stop typing', { user: user.username, channel: activeChannel });
      // this.props.onSave(newMessage);
      this.setState({ text: '', typing: false });
    }
  }
  onChange(event) {
    const { socket, user, activeChannel } = this.props;
    console.log('the props', this.props);
    this.setState({ text: event.target.value });
    if (event.target.value.length > 0 && !this.state.typing) {
      // socket.emit('typing', { user: user.username, channel: activeChannel });
      this.setState({ typing: true});
    }
    if (event.target.value.length === 0 && this.state.typing) {
      socket.emit('stop typing', { user: user.username, channel: activeChannel });
      this.setState({ typing: false});
    }
  }
  render() {
    return (
      <textarea 
        name="message"
        className="input"
        ref='messageCreator'
        autoFocus="true"
        value={this.state.text}
        onChange={this.onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
      />
    );
  }

}
