import React,{ Component } from 'react';
import moment from 'moment';



export default class MessageCreator extends Component {

	 constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      typing: false
    }
  }
  onKeyDown(event) {
    const text = event.target.value.trim();
    if (event.which === 13) {
      event.preventDefault();
      var newMessage = {
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

    this.setState({ text: event.target.value });
    console.log(this.state);
    if (event.target.value.length > 0 && !this.state.typing) {
      socket.emit('typing', { user: user.username, channel: activeChannel });
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
        ref='MessageCreator'
        autoFocus="true"
        value={this.state.text}
        onChange={this.onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
      />
    );
  }
}
