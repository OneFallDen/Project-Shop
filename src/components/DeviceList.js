import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import "../styles/DeviceList.css";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className="device-list">
            {device.selectedType.id === undefined && device.selectedBrand.id === undefined && JSON.stringify(device.searchedDevice) !== '{}' ?
                device.searchedDevice.map(device =>
                    <DeviceItem
                        key={device.id}
                        device={device}
                    />
                )
                :
                device.selectedType.id === undefined && device.selectedBrand.id === undefined ?
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