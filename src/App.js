import React, { useContext, useEffect } from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import './styles/App.css';
import { Context } from './index';
import DeviceService from './API/DeviceService';

function App() {
    const {user} = useContext(Context)
    async function getAuth(id) {
        const response = await DeviceService.GetAuth(id)
        if(response.data == "Token invalid") {
            user.setAuth(false)
        } else {
            user.setAuth(true)
        }
    }

    useEffect(() => {
        console.log(document.cookie);
        getAuth(document.cookie)
    }, [])
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
