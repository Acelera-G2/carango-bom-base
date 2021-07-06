import React from 'react';
import { Button} from '@material-ui/core';


function ButonGeneric({onClick, className, disabled, color, text,variant}) {
    return(
        <Button
            className={className}
            variant={variant}
            color={color}
            disabled={disabled}
            onClick={onClick}
            role="button"
        >
            {text}
        </Button>
    );
}

export default ButonGeneric;