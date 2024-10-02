import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import cookies from 'universal-cookie';
const apikey = 'https://chat-app-mychats.herokuapp.com/';
const chatClient = StreamChat.getInstance('your-stream-chat-api-key');

const app = () => {
  return (
    <div>
        <h1>mychats chat app</h1>
    </div>
  )
}

export default app