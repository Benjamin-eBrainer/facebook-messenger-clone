import React from 'react';
import './Message.css';
import { Card, CardContent, Typography } from '@mui/material';

function Message({ username, message }) {
    const isUser = username === message.username;
    return (
        <div className={`message ${ isUser && 'message__user' }`}>
            <Card className={ isUser ? 'message__userCard' : 'message__userGuest' }>
                <CardContent>
                    <Typography color='black' variant='h5' component='h2'>
                        {message.username}: {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message;