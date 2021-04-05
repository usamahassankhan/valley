import React from 'react'
import hr2 from './../../../assets/images/hr2.png';
import './index.css'
const index = () => {
    return (
        <div className="homerow2 container">
            <div  className="homerow2c1 col-6">
                <h1>About us</h1>
                <h5>
                Our all-in-one platform gives you everything you need to run your business.
                </h5>
                <p>
                We believe anything is possible with the right website to engage visitors. Whether you're about to create a website for the first time or you're a long time pro, we've got you covered.
                </p>
                <div className="linegray"></div>
            </div>
            <div className="col-3">
                <img src={hr2}/>
            </div>
        </div>
    )
}

export default index
