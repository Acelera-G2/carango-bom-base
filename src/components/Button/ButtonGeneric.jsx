import React from 'react';
import {Button} from '@material-ui/core';


function ButtonGeneric(props) {
    const { onClick, className, disabled, color, text,variant, type, arialLabel } = props
    return(
        <Button
            className={className}
            variant={variant}
            color={color}
            disabled={disabled}
            onClick={onClick}
            role='button'
            type={type}
            arial-label={arialLabel}
        >
            {text}
        </Button>
    );
}

export { ButtonGeneric };
