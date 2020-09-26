import React, { useEffect, useState } from 'react';
import './Feed.css';
import Storyreel from './Storyreel';
import Messagesender from './Messagesender';
import Post from './Post';
import db from './Firebase';
import { useStateValue } from './StateProvider';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({ id:doc.id, data: doc.data() })))
        })
    }, [])
    return (
        <div className="feed">
            <Storyreel />
            <Messagesender />
            
            {posts.map((post) => (
                <Post 
                key={post.data.id}
                profilepic={post.data.profilepic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image} 
                />
            ))}
        </div>
    )
}

export default Feed;