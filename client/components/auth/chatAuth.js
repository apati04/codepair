import { RECEIVE_SOCKET } from '../../actions/actionTypes';
import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';

export function receiveSocket(socketID) {
  return {
    type: RECEIVE_SOCKET,
    socketID
  }
}
