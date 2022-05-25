import React from 'react';
import DeviceService from '../API/DeviceService';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import '../styles/Favourite.css';

const Favourite = () => {
    const {device} = useContext(Context)

    return (
        <div className='favourite-list'>
            {device.favourite.map(dev => 
                <div className='favourite-item'>
                    <img src={dev.img} className='favourite-img'/>
                    <h2 className='favourite-title'>{dev.name}</h2>
                </div>
            )}
        </div>
    );
};

export default Favourite;