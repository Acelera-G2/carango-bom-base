import React from 'react';
import { TextField } from '@material-ui/core';


function InputGeneric(props) {
    const {
        label,
        id,
        type,
        handleChange,
        name,
        error,
        value,
        onBlur,
        helperText,
        variant,
        fullWidth,
        margin,
     } = props
    return(
        <TextField
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            helperText={helperText}
            error={error}
            name={name}
            id={id}
            label={label}
            type={type}
            variant={variant}
            fullWidth={fullWidth}
            margin={margin}
        />
    );
}
export { InputGeneric };