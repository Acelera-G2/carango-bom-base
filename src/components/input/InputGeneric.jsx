import React from 'react';
import { TextField } from '@material-ui/core';


function InputGeneric({ value, onChange, onBlur,helperText, error, name, id, label, type, variant, 
                        fullWidth=false, required=false, margin}) {
    return(
        <TextField
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            helperText={helperText}
            error={error}
            name={name}
            id={id}
            label={label}
            type={type}
            variant={variant}
            fullWidth={fullWidth}
            required={required}
            margin={margin}
        />
    );
}
export {InputGeneric};