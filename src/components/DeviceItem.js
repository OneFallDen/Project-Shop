import React from 'react';
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useNavigate()
    return (
        <div className="device-list-item" onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <img className="device-list-item-img" src={device.img} alt="deviceImg"/>
            <h2 className="device-list-item-title">{device.name}</h2>
            <p className="device-list-item-price">{device.price}</p>
        </div>
    );
};

export default DeviceItem;