import React from 'react';
import '../styles/Auth.css';
import MyInput from "../components/UI/MyInput/MyInput";
import '../styles/App.css';
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <div className="container">
            <div className="auth">
                <h2 className="auth-title"> {isLogin ? 'Авторизация' : 'Регистрация'} </h2>
                <form className="auth-form">
                    <MyInput style={{marginTop: '20px', maxWidth: '500px', height: '50px'}} type="email"
                             placeholder="Введите email"/>
                    <MyInput style={{marginTop: '20px', maxWidth: '500px', height: '50px'}} type="password"
                             placeholder="Введите пароль"/>
                    <div className="auth-form-control">
                        {isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}
                        {isLogin ?
                            <NavLink className="auth-form-control-link" to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            :
                            <NavLink className="auth-form-control-link"  to={LOGIN_ROUTE}>Войдите</NavLink>
                        }
                        <button className="form-button">
                            {isLogin ?
                                'Войти'
                                :
                                'Зарегистрироваться'
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;