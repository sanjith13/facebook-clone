import {React,useEffect,useState} from 'react';
import StoryReel from './storyreel';
import './feed.css';
import MessageSender from './messagesender';
import Post from './post';
import db from './firebase';
import { collection,getDocs,query,orderBy } from  'firebase/firestore';
function Feed() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    const getThePosts = async () =>{
      const postCol = collection(db,"posts");
      const q = query(postCol, orderBy("timestamp","desc"));
      const postSnapshot = await getDocs(q);
      const post = postSnapshot.docs.map((doc) => ({...doc.data(),id:doc.id}));
      setPosts(post);
  }
    getThePosts();
  });
  return <div className="feed">
    <StoryReel />
    <MessageSender />
    {posts.map((post) => (
      <Post
      key={post.id} 
      profileImg={post.profileImg} 
      image={post.image}
      username={post.username}
      timestamp = {post.timestamp}
      message = {post.message}
      />)
      )}
  </div>;
}

export default Feed;
