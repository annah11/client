import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';


import { ChannelListContainer, ChannelContainer } from './components';

import 'stream-chat-react/dist/css/v2/index.css';

import './App.css';


// eslint-disable-next-line no-undef
const client = StreamChat.getInstance(aiken);
const app = () => {
  return (
    <div className='app_wrapper'>
      <Chat client={client} theme="team light">
              {/* apiKey={thdfb9n9km77} */}
           <ChannelListContainer 
           
           />
           <ChannelContainer
           
           />
        </Chat>

    </div>
  )
}

export default app