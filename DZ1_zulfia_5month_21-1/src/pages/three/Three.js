import React from 'react';
import style from './css/Three.css'
import {useNavigate} from "react-router-dom";
const Three = () => {
    const navigate = useNavigate()
    function goToBack () {
        navigate(-1)
    }
    return (
        <div className="container">
            <h1>Three</h1>
            <div className={style.buttons}>
                <button>далее</button>
                <button onClick={goToBack}>назад</button>
            </div>
        </div>
    );
};

export default Three;