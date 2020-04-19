import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import InputComponent from '../InputComponent/InputComponent';
import Messages from '../Messages/Messages';

import UsersList from '../UsersList/UsersList'

import openNotificationWithIcon from '../Common/Notification';


import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [users, setUsers] = useState([]);
    const [message,setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT =  'https://antd-chatapp.herokuapp.com/';
    useEffect(() => {
        const {name,room} = queryString.parse(location.search);
        setName(name);
        setRoom(room);
        socket = io(ENDPOINT);
        
        socket.emit('join', { name,room},()=>{
            openNotificationWithIcon('success','New User',`${name} has joined the room ${room}`);
        });

        return () => {
            socket.emit('disconnect');
            socket.disconnect();
        }
        
    },[ENDPOINT,location.search])

    useEffect(() => {
        socket.on('message', message =>{
            setMessages(messages => [...messages,message]);
        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    },[])

    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage',message,() => setMessage(''));
        }
    }
    return (
        
        
        <div className="outerContainer">
            
            <div className="container">
                
                <InfoBar room = {room}/>

                <Messages messages={messages} name={name}/>

                <InputComponent message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <div className="container" style={{marginLeft:'50px'}}>
                <UsersList users={users}/>
            </div>
           
        </div>
            
    );
}

export default Chat;