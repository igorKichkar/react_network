import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.muBtn}>
            {/*с помощью ...prors передаем все параметры в кнопку*/}
            {children}
            {/*через children передается название кнопки*/}
        </button>);
};

export default MyButton;