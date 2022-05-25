import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {Context} from "../index";
import "../styles/DevicePage.css";
import like from '../assets/heart.png';
import DeviceService from '../API/DeviceService';

const DevicePage = () => {
    const {id} = useParams()
    const {device} = useContext(Context)

    async function addFavourite(sessionId, deviceId) {
        const response = await DeviceService.AddFavourite(sessionId, deviceId)
    }

    return (
        <div>
            {device.devices.map(device =>
                device.id === id &&
                    <div className='device-page'>
                        <img className='device-page-img' src={device.img} alt=""/>
                        <div className="device-page-info">
                            <h2 className='device-page-title'>{device.name}</h2>
                            <p className='device-page-price'>{device.price}</p>
                            <p className='device-page-text'>{device.description}</p>
                            <img 
                                className='device-page-btn-img' 
                                src={like} 
                                alt="Добавить в избранное"
                                onClick={() => addFavourite(document.cookie, device.id)}
                            />
                        </div>
                    </div>
            )}
        </div>
    );
};

export default DevicePage;