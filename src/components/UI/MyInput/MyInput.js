import React from 'react';
import './MyInput.css';

const MyInput = (props) => {

    return (
        <input
            value={props.value}
            onChange={props.onChange}
            style={props.style}
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
        />
    );
};

export default MyInput;