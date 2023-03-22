import React from 'react';
import style from './css/Four.css'
import {useNavigate} from "react-router-dom";
const Four = () => {
    const navigate = useNavigate()
    function goToBack () {
        navigate(-1)
    }
    return (
        <div className="container">
            <h1>Four</h1>
            <div className={style.buttons}>
                <button>далее</button>
                <button onClick={goToBack}>назад</button>
            </div>
        </div>
    );
};

export default Four;