import React from 'react';
import PropTypes from 'prop-types';

const ChatDisplay = ({ messages, username }) => {
  return (
    <ul className='message-list'>
      {messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === username
              ? 'message sender'
              : 'message recipient'
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  );
};

ChatDisplay.propTypes = {
  messages: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

export default ChatDisplay;
