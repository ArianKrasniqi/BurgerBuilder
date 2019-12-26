import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        // className={`${classes.Button} ${classes.Success}`}
        onClick={props.clicked} > {props.children}</button >
);

export default button;