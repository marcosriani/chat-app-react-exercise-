import React, { Component } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

// const messages = [
//   { username: 'Amy', text: 'Hi, Jon!' },
//   { username: 'Amy', text: 'How are you?' },
//   { username: 'John', text: 'Hi, Amy! Good, you?' },
// ];

class App extends Component {
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  };

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */

  onMessage = (username, message) => {
    const newMessage = {
      username: username,
      text: message,
    };

    this.setState((currentState) => ({
      messages: currentState.messages.concat([newMessage]),
    }));
  };

  render() {
    const { messages } = this.state;

    return (
      <div className='App'>
        <div className='container'>
          <ChatWindow
            messages={messages}
            username='Amy'
            onMessage={this.onMessage}
          />
          <ChatWindow
            messages={messages}
            username='John'
            onMessage={this.onMessage}
          />
        </div>
      </div>
    );
  }
}

export default App;
