import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Box, makeStyles } from '@material-ui/core';
import { ButtonGeneric, InputGeneric } from '../../components';
import { CrudModule } from '../../utils/modules';
import useForm from '../../hooks/useForm';
import validateFormCar from '../../validations/validationCar';
const useStyles = makeStyles(() => ({
    actions: {
        marginRight: "10px"
    }
}));

function CadastroMarca() {
    const classes = useStyles()
    const history = useHistory();
    const itemCrud = CrudModule('item');
    const { id } = useParams();
    const initialValues = {
        marca: ''
    }
    const { values, errors, handleChange, handleSubmit, setValues } = useForm(
        initialValues,
        formControl,
        validateFormCar,
     );
    function formControl (){
        if (id) {
            itemCrud.editItem(id,values.marca)
        } else {
            itemCrud.add(values.marca)
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
    }, [id,errors]); 

    return (
        <form onSubmit={handleSubmit} >
            <InputGeneric
                name="marca"
                value={values.marca}
                handleChange={handleChange}
                helperText={errors.marca}
                error={!!errors.marca}
                label="Marca"
                type="text"
                variant="outlined"
                fullWidth
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

export default CadastroMarca;