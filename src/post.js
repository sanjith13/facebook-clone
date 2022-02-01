import React,{useEffect} from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './post.css';
function Post({profileImg,image,username,timestamp,message}) {
  return (
  <div className="post">
      <div className="post__top">
          <Avatar src= {profileImg} />
          <div className="post__info">
              <h3>{username}</h3>
              <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
      </div>
      <div className="post__bottom">
          <p>{message}</p>
      </div>
      <div className="post__image">
          <img src={image} alt=""/>
      </div>
      <div className="post__options">
          <div className="post__option">
              <ThumbUpIcon />
              <h4>Like</h4>
          </div>
          <div className="post__option">
              <ChatBubbleOutlineIcon />
              <h4>Comment</h4>
          </div>
          <div className="post__option">
              <NearMeIcon />
              <h4>Share</h4>
          </div>
          <div className="post__option">
              <ExpandMoreIcon />
              <h4>More</h4>
          </div>
      </div>
  </div>);
}

export default Post;
