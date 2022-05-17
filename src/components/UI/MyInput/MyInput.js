import React, {useContext, useState} from 'react';
import './MyInput.css';
import {Context} from "../../../index";

const MyInput = (props) => {
    const {device} = useContext(Context)
    const [search, setSearch] = useState('')
    return (
        <input
            value={search}
            onChange={(e) => {setSearch(e.target.value); device.searchSortDevices(search)}}
            style={props.style}
            type={props.type}
            placeholder={props.placeholder}
        />
    );
};

export default MyInput;