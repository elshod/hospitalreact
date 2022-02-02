import React from "react";
import { Link } from "react-router-dom";
const Top = () => {
    return (
        <header className="header">
            <input className="header__search" placeholder="Qidiruv"/>
            <button className="header__notif">
                <span className="header__notif--count">3</span>
                <img src={require('../assets/img/notif.png')}/>
            </button>
            <Link to='/profile' className="header__profile">
                <img src={require('../assets/img/user.jpg')}/>
            </Link>
        </header>
    )
}

export default Top