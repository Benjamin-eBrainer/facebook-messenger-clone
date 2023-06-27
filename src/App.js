import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message.js';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import db from './firebase.js';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {username: "Qazi", text: "What is up"},
    {username: "Sonny", text: "Yo"},
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, [])

  console.log(username)

  const sendMessage = e => {
    e.preventDefault();
    setMessages([...messages, {username, text: input}]);
    setInput("");
  }

  console.log(messages)

  return (
    <div className="app">
      <h1>Building Facebook Messenger Clone</h1>
      { username && <h2>Welcome {username}</h2> }
      <form>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={ e => setInput(e.target.value) } />
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      <div>
        {
          messages.map(message => (
            <Message username={username} message={message} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
