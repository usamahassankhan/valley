import React from 'react'
import project1 from './../../../assets/images/project1.png';
import project2 from './../../../assets/images/project2.png';
import project3 from './../../../assets/images/project3.png';
import project4 from './../../../assets/images/project4.png';
import project5 from './../../../assets/images/project5.png';
import project6 from './../../../assets/images/project6.png';
import project7 from './../../../assets/images/project7.png';
import project8 from './../../../assets/images/project8.png';
import './index.css';

const index = () => {
    return (
        <div className="container-fluid projects">
            <h1>
            Recent Projects
            </h1>
            <p>
            We’ve partnered with teams in industries of all kinds.
You tell us your vision and we’ll get it done!
            </p>
            <div className="projectsimage">
                <img src={project1}/>
                <img src={project2}/>
                <img src={project3}/>
                <img src={project4}/>
                <img src={project5}/>
                <img src={project6}/>
                <img src={project7}/>
                <img src={project8}/>
           
            </div>
            
        </div>
    )
}

export default index
