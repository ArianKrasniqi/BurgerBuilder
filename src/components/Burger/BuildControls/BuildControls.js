import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { ingredientLabel: 'Salad', type: 'salad' },
    { ingredientLabel: 'Bacon', type: 'bacon' },
    { ingredientLabel: 'Cheese', type: 'cheese' },
    { ingredientLabel: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl
                key={control.ingredientLabel}
                ingredientLabel={control.ingredientLabel}
                more={() => props.addIngredient(control.type)}
                less={() => props.lessIngredient(control.type)}
                disabled={props.disabled[control.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW!</button>
    </div>
);

export default buildControls;