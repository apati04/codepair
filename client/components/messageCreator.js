import React,{ Component, PropTypes } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import moment from 'moment';
import socket from 'socket.io-client';
import profile from './profile';


class MessageCreator extends Component {

	 constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      typing: false
    };
		this.socket = io();
  }



  onKeyDown(event) {
  	console.log('my id: ', profile.id);
    const { message , typing} = this.props;
    console.log('the this props ,: ', this.props);
    const text = event.target.value.trim();
    if (event.which === 13) {
      event.preventDefault();
      var data = {
        message: text,
        user: id,
        time: moment.utc().format('lll')
      };
      // socket.emit('codeChange', data);
      // socket.emit('stop typing', { user: user.username, channel: activeChannel });
      console.log('the data: ' , data);
      
      this.setState({ text: '', typing: false });
    }
  }
  onChange(event) {
    const { userId , typing } = this.props;
    this.setState({ text: event.target.value });
    if (event.target.value.length > 0 && !this.state.typing) {
      console.log('i am typing : ', event.target.value)
      this.setState({ typing: true});
    }
    if (event.target.value.length === 0 && this.state.typing) {
      // socket.emit('stop typing', { user: user.username, channel: activeChannel });
      this.setState({ typing: false});
    }
  }
  render() {
    return (
      <textarea 
        name="message"
        className="input"
        value={this.state.text}
        onChange={this.onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
      />
    );
  }

}
function mapStateToProps(state){
	return { message: state.text}
}

export default connect(mapStateToProps)(MessageCreator);