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
        select,
        children,
        defaultValue
     } = props
    return(
        <>
            {select &&  <TextField
                value={value  || ''}
                onChange={handleChange}
                onBlur={onBlur}
                error={error}
                name={name}
                id={id}
                role={'input'}
                select
                label={label}
                variant={variant}
                fullWidth={fullWidth}
                margin={margin}
                helperText={helperText}
                defaultValue={defaultValue}
                >
                {children}
            </TextField>}

            {!select && <TextField
                value={value || ''}
                onChange={handleChange}
                onBlur={onBlur}
                helperText={helperText}
                error={error}
                name={name}
                id={id}
                label={label}
                type={type}
                role={'input'}
                variant={variant}
                fullWidth={fullWidth}
                margin={margin}
            />}
        </>
    );
}
export { InputGeneric };