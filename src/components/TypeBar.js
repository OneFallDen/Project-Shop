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
                    className={type.id === device.selectedType.id ? "type-list-item-active" : "type-list-item"}
                    key={type.id}
                    onClick={() => device.setSelectedType(type)}
                >
                    {type.name}
                </li>
            )}
        </ul>
    );
});

export default TypeBar;