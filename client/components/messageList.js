import React, { Component, Proptypes } from 'react';
import { List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);
const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

export default class MessagesList extends Component {
  render () {
    let {message} = this.props;
    return (
      <div id="content" className="content">
      <Subheader>The Subheader</Subheader>
      <ListItem
        rightIconButton={rightIconMenu} 
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