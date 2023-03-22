import React from 'react';
import style from './/css/Five.module.css'
import {useNavigate} from "react-router-dom";

const Five = () => {

    const navigate = useNavigate()
    function goToBack () {
        navigate(-1)
    }
    return (

            <div className="container">

                <h1>Five</h1>
                <div className={style.buttons}>
                    <button onClick={goToBack}>назад</button>
                </div>
        </div>
    );
};

export default Five;