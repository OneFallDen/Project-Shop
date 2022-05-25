import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import "../styles/DeviceList.css";
import DeviceItem from "./DeviceItem";
import DeviceService from '../API/DeviceService';
import { useEffect, useState } from "react";
import MyLoader from './UI/Loader/MyLoader';

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className="device-list">
            {device.selectedType.type === undefined && device.selectedBrand.brand === undefined && JSON.stringify(device.searchedDevice) !== '{}' ?
                device.searchedDevice.map(device =>
                    <DeviceItem
                        key={device.id}
                        device={device}
                    />
                )
                :
                device.selectedType.type === undefined && device.selectedBrand.brand === undefined ?
                    device.devices.map(device =>
                        <DeviceItem
                            key={device.id}
                            device={device}
                        />
                    )
                :
                device.typeSortedDevices.map(device =>
                    <DeviceItem
                        key={device.id}
                        device={device}
                    />
                )
            }
        </div>
    );
});

export default DeviceList;