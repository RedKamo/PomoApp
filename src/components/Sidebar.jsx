import React from 'react';

import '../assets/styles/Sidebar.scss';
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';

const Sidebar =()=>{
    return(
        <div className="sidebar">
            <div className="sidebar__container">
                <div className="sidebar__container__menu">
                    <ul>
                        <li className="today">Today Task <FaArrowRight /></li>
                        <li>React Project</li>
                        <li>Angular Project</li>
                        <li>Github OpenSource Project</li>
                        <li>Web Portfolio</li>
                    </ul>
                </div>
                <div className="sidebar__container__footer">
                    <ul>
                        <li className="today">Add new project <FaPlus /></li>
                        <li className="set">Settings <RiSettings5Fill /> </li>
                    </ul>
                </div>
            </div>
        </div>  
    )
}

export default Sidebar;