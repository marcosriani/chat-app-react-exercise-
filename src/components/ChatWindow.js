import React, { Component } from 'react';
import ChatDisplay from './ChatDisplay';
import ChatInput from './ChatInput';
import PropTypes from 'prop-types';

class ChatWindow extends Component {
  onMessage = (message) => {
    this.props.onMessage(this.props.username, message);
  };

  render() {
    const { messages, username } = this.props;

    return (
      <div className='chat-window'>
        <h2>Super Awesome Chat</h2>
        <div className='name sender'>{username}</div>

        <ChatDisplay messages={messages} username={username} />
        <ChatInput onMessage={this.onMessage} />
      </div>
    );
  }
}

ChatWindow.propTypes = {
  onMessage: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
};

export default ChatWindow;
