import React from 'react';
import TypeBar from "../components/TypeBar";
import Brands from "../components/Brands";
import '../styles/Shop.css';
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <main>
            <div className="container">
                <div className="main__content">
                    <TypeBar></TypeBar>
                    <div className="main__content__right">
                        <Brands></Brands>
                        <DeviceList></DeviceList>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Shop;