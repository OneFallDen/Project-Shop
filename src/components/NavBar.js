import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {FAVOURITE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import '../styles/NavBar.css';
import MyInput from "./UI/MyInput/MyInput";
import Search from "./UI/Search/Search";
import searchImg from '../assets/magnifying-glass.png';
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink to={SHOP_ROUTE} className="header__logo">СПБ-Каталог</NavLink>
                    <div className="search-group" style={{display: "flex", position: "relative"}}>
                        <MyInput placeholder="Поиск по катологу..."/>
                        <Search><img src={searchImg} alt=""/></Search>
                    </div>
                    <ul className="header__nav">
                        <li className="header__nav-item">{user._isAuth ?
                            <NavLink className="header__nav-link" to={LOGIN_ROUTE}>Выйти</NavLink> :
                            <NavLink className="header__nav-link" to={REGISTRATION_ROUTE}>Войти</NavLink>}
                        </li>
                        {user._isAuth ? <li className="header__nav-item"><NavLink className="header__nav-link" to={FAVOURITE_ROUTE}>Избранное</NavLink></li> : ''}
                    </ul>
                </div>
            </div>
        </header>
    );
});


export default NavBar;