import React from 'react';
import '../styles/Auth.css';
import MyInput from "../components/UI/MyInput/MyInput";
import '../styles/App.css';
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import DeviceService from '../API/DeviceService';
import { useState, useContext } from 'react';
import { Context } from '../index';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [login, setLogin] = useState('')
    const [pwd, setPwd] = useState('')
    const {user} = useContext(Context)

    async function getAuth(id) {
        const response = await DeviceService.GetAuth(id)
        if(response.data === "Token invalid") {
            user.setAuth(false)
        } else {
            user.setAuth(true)
        }
    }

    async function auth(login, pwd) {
        const response = await DeviceService.Auth(login, pwd)
        document.cookie = response.data[response.data.length - 1].id
        getAuth(document.cookie)
    }

    async function registration(login, pwd) {
        const response = await DeviceService.Reg(login, pwd)
        console.log(response);
    }
    function logas(e) {
        e.preventDefault()
    }
    return (
        <div className="container">
            <div className="auth">
                <h2 className="auth-title"> {isLogin ? 'Авторизация' : 'Регистрация'} </h2>
                <form className="auth-form" 
                    onSubmit={logas}
                >
                    <MyInput style={{marginTop: '20px', maxWidth: '500px', height: '50px'}} 
                        type="text"
                        placeholder="Введите ваш логин"
                        value = {login}
                        onChange = {e => setLogin(e.target.value)}
                        name="username"
                    />
                    <MyInput 
                        style={{marginTop: '20px', maxWidth: '500px', height: '50px'}} 
                        type="password"
                        placeholder="Введите пароль"
                        value = {pwd}
                        onChange = {e => setPwd(e.target.value)}
                        name="password"
                    />
                    <div className="auth-form-control">
                        {isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}
                        {isLogin ?
                            <NavLink className="auth-form-control-link" to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            :
                            <NavLink className="auth-form-control-link"  to={LOGIN_ROUTE}>Войдите</NavLink>
                        }
                        {isLogin ?
                            <button className="form-button"
                                onClick= {() => auth(login, pwd)}
                            >
                                Войти
                            </button>
                            :
                            <button 
                                className="form-button"
                                onClick={() => registration(login, pwd)}
                            >
                                Зарегистрироваться
                            </button>
                        } 
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;