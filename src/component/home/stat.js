import React from "react";

const Stat = () => {
    return (
        <div className="row">
            <div className="col-3">
                <div className="stat__card">
                    <img src={require('../../assets/img/icon1.png')} alt=""/>
                    <div className="stat__info">
                        <div className="stat__title">
                            Hodimlar
                        </div>
                        <div className="stat__count">
                            213
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="stat__card">
                    <img src={require('../../assets/img/icon2.png')} alt=""/>
                    <div className="stat__info">
                        <div className="stat__title">
                        Bemorlar
                        </div>
                        <div className="stat__count">
                        104
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="stat__card">
                    <img src={require('../../assets/img/icon3.png')} alt=""/>
                    <div className="stat__info">
                        <div className="stat__title">
                        Xonalar
                        </div>
                        <div className="stat__count">
                        24
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="stat__card">
                    <img src={require('../../assets/img/icon4.png')} alt=""/>
                    <div className="stat__info">
                        <div className="stat__title">
                        Byudjet
                        </div>
                        <div className="stat__count">
                            $12 213
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stat