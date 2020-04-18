import React from 'react';
import {  CheckCircleOutlined,CloseCircleOutlined } from '@ant-design/icons';

import './InfoBar.css'
import { Tooltip } from 'antd';

const InfoBar = ({room}) => {
    return (
        <div className="infoBar">
            <div className = "leftInnerContainer">
                <Tooltip title={<span>Online</span>}>
                    <CheckCircleOutlined style={{marginRight:'5%'}} />
                </Tooltip>
                <h2 style={{color:'white',marginTop:'3%'}}>{room}</h2>
            </div>
            <div className = "rightInnerContainer">
                <Tooltip title={<span>Exit Room</span>}>
                    <a href="/"><CloseCircleOutlined style={{color:'red'}}/></a>
                </Tooltip>
            </div>
        </div>
    )
}

export default InfoBar;

