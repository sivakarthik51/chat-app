import React from 'react';
import {  SendOutlined } from '@ant-design/icons';

import './InputComponent.css'
import { Tooltip,Input, Button } from 'antd';

const InputComponent = ({message,setMessage,sendMessage}) => {
    return (
        <form className="form">
            <Input 
                className="input"
                value={message} 
                placeholder="Enter Message" 
                onChange={(event) => setMessage(event.target.value)} 
                onPressEnter={(event) => sendMessage(event)}
            />
            <Button 
                className="sendButton" 
                size="large" 
                type="primary" 
                icon = {<SendOutlined />}
                onClick={(event) => sendMessage(event)}
            >
                    Send
            </Button>
        </form>
        
    )
}

export default InputComponent;

