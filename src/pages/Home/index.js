import React from 'react'
import Header from './../../components/Header';
import Homeimage from './../Home/Homeimage/index'
import Homerow2 from './../Home/Homerow2/index';
import Homerow3 from './../Home/Homerow3/index';
import Cost from './../cost/index';
import Projects from  './Projects'
const index = () => {
    return (
        <div>
            <Header/>
            <Homeimage/>
            <Homerow2/>
            <Homerow3/>
            <Projects/>
            <Cost/>
        </div>
    )
}

export default index
