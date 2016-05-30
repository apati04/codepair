import React,{ Component } from 'react';
import moment from 'moment';
import * as actions from '../actions'

export default class MessageCreator extends Component {

	 constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      typing: false
    }
  }
  componentDidMount() {
      this.socket = io();  
  };
  onKeyDown(event) {
    console.log('props', this.props);
    console.log('context:', this.context);
    const text = event.target.value.trim();
    if (event.which === 13) {
      event.preventDefault();
      var newMessage = {
        message: text,
        time: moment.utc().format('lll')
      };
      this.socket.emit('new message', newMessage);
      this.props.addMessage({newMessage});
      // this.props.onSave(newMessage);
      this.setState({ text: '', typing: false});
    }
  }
  onChange(event) {
    this.socket = io();
    this.setState({ text: event.target.value });
    console.log(this.state);
    if (event.target.value.length > 0 && !this.state.typing) {
      this.socket.emit('typing', this.state );
      this.setState({ typing: true});
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
