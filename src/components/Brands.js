import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import "../styles/Brands.css";


const Brands = observer(() => {
    const {device} = useContext(Context)
    return (
        <ul className='brands-list'>
            {device.brands.map(brand =>
                <li
                    className={brand.brand === device.selectedBrand.brand ? "brands-list-item-active" : "brands-list-item"}
                    key={brand}
                    onClick={() => {device.setSelectedBrand(brand); device.typeSortDevices()}}
                >
                    {brand.brand}
                </li>
            )}
        </ul>
    );
});

export default Brands;