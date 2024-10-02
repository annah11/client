import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import cookies from 'universal-cookie';
import ChannelListContainer from './components/ChannelListContainer';
import Channelconiener from './components/Channelconiener';


import { ChannelListContainer, Channelconiener } from './components';
const apikey = 'https://chat-app-mychats.herokuapp.com/';
const client = StreamChat.getInstance(apikey);
const app = () => {
  return (
    <div className='app_wrapper'>
        <Chat
            apiKey={apikey}
            theme='light_theme'
            channel='my-channel'
            clientOptions={{
              userId: cookies.fromJSON(document.cookie).userId,
            }}
        />

    </div>
  )
}

export default app