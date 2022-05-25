import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import '../styles/TypeBar.css';

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ul className="type-list">
            {device.types.map(type =>
                <li
                    className={type.type === device.selectedType.type ? "type-list-item-active" : "type-list-item"}
                    key={type}
                    onClick={() => {device.setSelectedType(type); device.typeSortDevices()}}
                >
                    {type.type}
                </li>
            )}
        </ul>
    );
});

export default TypeBar;