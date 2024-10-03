import React from 'react'
import { ChannelListContainer as StreamChannelListContainer, usechatContext  }  from 'stream-chat-react';

import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList,TeamChannelPreview } from './';
import hospital from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';
import call from '../assets/call.png'; 

const sidebar = () => {
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={hospital} alt="Hospital" width="30" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={call} alt="Call" width="30" />
      </div>
    </div>

  </div>
}
function CustomChannelListContainer() {
  return (
   <>
    <sidebar/>
   </>
  );
}

export default CustomChannelListContainer