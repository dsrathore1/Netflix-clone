import React from 'react';
import style from '../../Styles/FAQStyle.module.css';

const FaqComponents = (props) => {
    return (
        <>
            <h1 className={style.heading1}>{props.title}</h1>
            <h3 className={style.heading2}>{props.subTitles}</h3>
            <img className={style.image} src={props.image} alt="@" />
            <p>
                {props.para}
            </p>
        </>
    )
}

export default FaqComponents