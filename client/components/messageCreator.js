import React,{ Component, PropTypes } from 'react';

let enterKeyCode = 13;
class MessageCreator extends Component {

  constructor(props){
    super(props);
    this.state= {text: ''};
  }

  render() {
    return (
      <textarea 
        name="message"
        className="input"
        value={this.state.text}
        handleInputChange={this.handleInputChange.bind(this)}
        handleInputKeyDown={this.handleInputKeyDown.bind(this)}
      />
    );
  }
   handleInputChange(event, value) {
    this.setState({text: event.target.value});
  }
  handleInputKeyDown(event) {
    // keyboard code for Enter key
    if(event.keyCode === 13) {
      console.log(event);
      let text = this.state.text.trim();
      if(text) {
        console.log(this);
      }
      this.setState({text: ''});
    }
  }
}


export default MessageCreator;