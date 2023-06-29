import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message.js';
import {
  FormControl,
  Input,
  IconButton
} from '@mui/material';
import db from './firebase.js';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from 'firebase/firestore';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const colRef = collection(db, 'messages');
  const q = query(colRef, orderBy('timestamp', 'desc'))

  // Fetching the data whenever there is a change in backend collection
  useEffect(() => {
    onSnapshot(q, snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, [])

  // Adding a document from the user's input
  const sendMessage = e => {
    e.preventDefault();
    addDoc(colRef, {
      message: input,
      username,
      timestamp: serverTimestamp()
    })
    setInput("");
  }

  return (
    <div className="app">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Messenger icon" />
      <h1>Building Facebook Messenger Clone</h1>
      { username && <h2>Welcome {username}</h2> }
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input className='app__input' placeholder='Enter a message...' value={input} onChange={ e => setInput(e.target.value) } />
          <IconButton className='app__iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
