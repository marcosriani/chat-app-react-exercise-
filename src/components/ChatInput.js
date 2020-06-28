import React, { Component } from 'react';

class ChatInput extends Component {
  state = {
    text: '',
  };

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onMessage(this.state.text);
    this.setState({ text: '' });
  };

  isDisabled = () => {
    return this.state.text === '';
  };

  render() {
    return (
      <div>
        <form className='input-group' onSubmit={this.handleSubmit}>
          <input
            onChange={this.onInputChange}
            value={this.state.text}
            type='text'
            className='form-control'
            placeholder='Enter your message...'
          />
          <div className='input-group-append'>
            <button disabled={this.isDisabled()} className='btn submit-button'>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ChatInput;
