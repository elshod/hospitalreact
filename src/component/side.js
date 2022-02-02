import React from "react";
import { Link } from "react-router-dom";

const Side = () => {
    return (
        <div className="side">
            <Link to='/' className="side__logo">
                <img src={require('../assets/img/logo.png')}/>
            </Link>
            <div className="side__title">MEDICINE</div>
            <ul className="side__menu">
                <li>
                    <Link to='/'>
                        <img src={require('../assets/img/home.png')} />
                        Bosh sahifa 
                    </Link>
                </li>
                <li>
                    <Link to='/rooms'>
                        <img src={require('../assets/img/palata.png')} />
                        Palatalar
                    </Link>
                </li>
                <li>
                    <Link to='/doctors'>
                        <img src={require('../assets/img/doctor.png')} />
                        Shifokorlar
                    </Link>
                </li>
                <li>
                    <Link to='/departs'>
                        <img src={require('../assets/img/depart.png')} />
                        Bo’limlar
                    </Link>
                </li>
                <li>
                    <Link to='/patients'>
                        <img src={require('../assets/img/patient.png')} />
                        Bemorlar
                    </Link>
                </li>
                <li>
                    <Link to='/help'>
                        <img src={require('../assets/img/help.png')} />
                        Yordam
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Side