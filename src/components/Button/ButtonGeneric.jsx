import React from 'react';
import { Button} from '@material-ui/core';


function ButonGeneric({onclick, className, disabled, color, text,variant}) {
    return(
        <Button
            className={className}
            variant={variant}
            color={color}
            disabled={disabled}
            onClick={onclick}
            role="button"
        >
            {text}
        </Button>
    );
}

export default ButonGeneric;