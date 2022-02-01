import React from 'react';
import { Avatar } from '@material-ui/core';
import './story.css';
function Story({profileImg,story,title}) {
  return <div className="story" style={{backgroundImage : `url(${story})`}}>
      {profileImg && <Avatar src = {profileImg} className="story__avatar"/>}
      <h4>{title}</h4> 
  </div>;
}

export default Story;
