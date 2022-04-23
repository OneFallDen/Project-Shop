import React from 'react';
import './MyInput.css';

const MyInput = (props) => {
    return (
        <input style={props.style} type={props.type} placeholder={props.placeholder}/>
    );
};

export default MyInput;