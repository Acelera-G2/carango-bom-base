import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import {Box, makeStyles} from '@material-ui/core';
import {ButtonGeneric, InputGeneric} from '../../components';
import { CrudModule } from '../../utils/modules';
import useForm from '../../hooks/useForm';
import { validateFormCar } from '../../validations/validationCar';

const useStyles = makeStyles(() => ({
    actions: {
        marginRight: "10px"
    }
}));

function RegisterCar() {
    const classes = useStyles();
    const history = useHistory();
    const itemCrud = CrudModule('itemCar');
    const { id } = useParams();

    const initialValues = {
        moduleCar: '',
        year: '',
        price: '',
    }
    
    const { values, errors, handleChange, handleSubmit, setValues } = useForm(
        initialValues,
        formControl,
        validateFormCar,
    );

    function formControl () {
        if (id) {
            itemCrud.editItem(id,values)
        } else {
            itemCrud.add(values)
        }
        history.goBack();
    }
    function cancelar() {
        history.goBack();
    }

    useEffect(() => {
        if (id) {
            setValues(itemCrud.getItem(id))
        }
    }, [id]);

    return (
        <form onSubmit={handleSubmit}>
            <InputGeneric
                value={values.moduleCar}
                handleChange={ handleChange }
                helperText={errors.moduleCar}
                error={!!errors.moduleCar}
                name="moduleCar"
                id="moduleCar"
                label="Modelo"
                type="text"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />
            <InputGeneric
                value={values.year}
                handleChange={handleChange}
                helperText={errors.year}
                error={!!errors.year}
                name="year"
                id="year"
                label="Ano"
                type="text"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />
            <InputGeneric
                value={values.price}
                handleChange={handleChange}
                helperText={errors.price}
                error={!!errors.price}
                name="price"
                id="price"
                label="Valor"
                type="text"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />

            <Box display="flex" justifyContent="flex-end">
                
                <ButtonGeneric
                    variant="outlined"
                    color="secondary"
                    onClick={cancelar}
                    text="Cancelar"
                    className={classes.actions}
                />

                <ButtonGeneric
                    variant="outlined"
                    color="primary"
                    type="submit"
                    text={id ? 'Alterar' : 'Cadastrar'}
                />
            </Box>
                
        </form>
    );
}

export default RegisterCar;