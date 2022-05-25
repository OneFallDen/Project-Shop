import React from 'react';
import TypeBar from "../components/TypeBar";
import Brands from "../components/Brands";
import '../styles/Shop.css';
import DeviceList from "../components/DeviceList";
import { useState } from 'react';
import { Context } from '../index';
import { useContext } from 'react';
import DeviceService from '../API/DeviceService';
import { useEffect } from 'react';
import MyLoader from '../components/UI/Loader/MyLoader';

const Shop = () => {
    const {device} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)

    async function fetchDevices() {
        setIsLoading(true)
        const response = await DeviceService.getDevices()
        device.setDevices(response.data)
        setIsLoading(false)
    }
    async function fetchBrands() {
        setIsLoading(true)
        const response =  await DeviceService.getBrands()
        device.setBrands(response.data)
        setIsLoading(false)
    }
    async function fetchTypes() {
        setIsLoading(true)
        const response =  await DeviceService.getTypes()
        device.setTypes(response.data)
        setIsLoading(false)
    }


    async function getFavourite() {
        setIsLoading(true)
            const response = await DeviceService.GetFavourite(document.cookie)
            device.setFavourite(response.data)
        setIsLoading(false)
    }

    useEffect(() =>{
        fetchDevices()
        fetchBrands()
        fetchTypes()
        getFavourite()
    }, [])

    return (
        <main>
            {isLoading 
            ? <MyLoader/> 
            :<div className="container">
                <div className="main__content">
                    <TypeBar></TypeBar>
                    <div className="main__content__right">
                        <Brands></Brands>
                        <DeviceList></DeviceList>
                    </div>
                </div>
            </div>
            }
        </main>
    );
};

export default Shop;