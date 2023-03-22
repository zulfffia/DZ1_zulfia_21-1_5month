import React from 'react';
import style from './css/Two.css'
import {useNavigate} from "react-router-dom";
const Two = () => {
    const navigate = useNavigate()
    function goToBak () {
        navigate(-1)
    }
    return (
        <div className="container">
            <h1>Two</h1>
            <div className={style.buttons}>
                <button >далее</button>
                <button onClick={goToBak}>назад</button>
            </div>
        </div>
    );
};

export default Two;