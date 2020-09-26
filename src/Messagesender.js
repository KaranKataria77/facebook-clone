import React,{ useState } from 'react';
import './Messagesender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './Firebase';
import firebase from 'firebase';


const Messagesender = () => {
    const[{user}, dispatch] = useStateValue();
    const[input, setInput] = useState("");
    const[image, setImage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilepic: user.photoURL,
            image: image,
            username: user.displayName,
        })
        setInput("");
        setImage("");
    }
    return (
        <div className="messagesender">
            <div className="messagesender__top">
                <Avatar src={user.photoURL}/>
                <form>
                <input
                onChange={e => setInput(e.target.value)}
                value={input}
                className="messagesender__input" 
                placeholder={`What's on your mind?, ${user.displayName}`} />
                <input placeholder={`Image URL`} value={image} onChange={e => setImage(e.target.value)}/>
                <button onClick={onSubmit} type="submit">Hidden button</button>
                </form>
            </div>
            <div className="messagesender__bottom">
                <div className="messagesender__option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live video</h3>
                </div>
                <div className="messagesender__option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3>Photos/Videos</h3>
                </div>
                <div className="messagesender__option">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default Messagesender;