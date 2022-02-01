import React, { useState,useContext } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { Avatar } from '@material-ui/core';
import './messagesender.css';
import db from './firebase';
import {addDoc , collection , serverTimestamp } from "firebase/firestore";
import { StateContext } from './stateprovider';
function MessageSender() {
  const {username} = useContext(StateContext);
  const [input,setInput] = useState("");
  const [imgUrl,setImgUrl] = useState("");
  const usersCollectionRef = collection(db,"posts");
  const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const myPosts = await addDoc(usersCollectionRef,{
                message:input,
                timestamp: serverTimestamp(),
                image : imgUrl,
                profileImg : username.photoURL,
                username : username.displayName
            });
            console.log(myPosts.id);
        } catch (error) {
            console.log(error);
        }
        setInput("");
        setImgUrl("");
  }
  return <div className="messagesender">
      <div className="messagesender__top">
          <Avatar />
          <form>
              <input value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder="What is on your mind?"/>
              <input value={imgUrl} onChange={(e)=>{setImgUrl(e.target.value)}} placeholder="post (optional)" />
              <button onClick = {handleSubmit} type="submit">Hidden Button</button>
          </form>
      </div>
      <div className="messagesender__bottom">
          <div className="messagesender__option">
              <VideocamIcon style={{"color" : "red"}}/>
              <h4>Live Video</h4>
          </div>
          <div className="messagesender__option">
              <PhotoLibraryIcon style={{"color" : "green"}}/>
              <h4>Photo/Video</h4>
          </div>
          <div className="messagesender__option">
              <InsertEmoticonIcon style={{"color" : "yellow"}}/>
              <h4>Feelings/Activity</h4>
          </div>
      </div>
  </div>;
}

export default MessageSender;
