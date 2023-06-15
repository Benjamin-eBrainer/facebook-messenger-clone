import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@mui/material';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["Hey", "What is up", "Whoa"]);

  const sendMessage = e => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  }

  console.log(input)
  console.log(messages)

  return (
    <div className="app">
      <h1>Building Facebook Messenger Clone</h1>
      <form>
        <input placeholder="Typing..." value={input} onChange={ e => setInput(e.target.value) } />
        <Button variant='outlined' type='submit' onClick={sendMessage}>Send Message</Button>
      </form>
      <div>
        {
          messages.map(message => (
            <p>{message}</p>
          ))
        }
      </div>
    </div>
  );
}

export default App;
