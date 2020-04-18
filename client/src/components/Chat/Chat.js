import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import {Input} from 'antd';
import InfoBar from '../InfoBar/InfoBar';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT =  'localhost:5000';
    useEffect(() => {
        const {name,room} = queryString.parse(location.search);
        setName(name);
        setRoom(room);
        socket = io(ENDPOINT);
        
        socket.emit('join', { name,room},()=>{
            
        });

        return () => {
            socket.emit('disconnect');
            socket.disconnect();
        }
        
    },[ENDPOINT,location.search])

    useEffect(() => {
        socket.on('message', message =>{
            setMessages(messages => [...messages,message]);
        })
    },[])

    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage',message,() => setMessage(''));
        }
    }
    console.log(message,messages);
    return (
        <div className="outerContainer">
            <div className="container">
                {/* <Input value={message} placeholder="Enter Message" onChange={(event) => setMessage(event.target.value)} onPressEnter={(event) => sendMessage(event)}/> */}
                <InfoBar room = {room}/>
            </div>

        </div>
    );
}

export default Chat;