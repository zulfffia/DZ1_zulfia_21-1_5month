import React from 'react';
import {NavLink} from "react-router-dom";
import style from ".//css/Transit.module.css"

const Transit = () => {
    return (
        <ul>
            <li >
                <NavLink to="/one" className="link">One Page</NavLink>
            </li>
            <li>
                <NavLink to="/two" className="link">Two Page</NavLink>
            </li>
            <li>
                <NavLink to="/three" className="link">Three Page</NavLink>
            </li>
            <li>
                <NavLink to="/four" className="link">Four Page</NavLink>
            </li>
            <li>
                <NavLink to="five" className="link" >Five Page</NavLink>
            </li>
        </ul>
    );
};

export default Transit;