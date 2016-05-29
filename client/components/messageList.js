import React, { Component, Proptypes } from 'react';
import { List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

export default class MessagesList extends Component {

  render () {
    let {message} = this.props;
    return (
    <div>
      <ListItem 
        primaryText={
          <p> primary text</p>
        }
        secondaryText={
          <p>
          <span style={ {color: 'grey'} }>to me, Scott, Jenn</span>
          Secondary text
          </p>
        }
        secondaryTextLines = {2}
        />
        <Divider inset={true} />
    
    </div>
    )
  }
}