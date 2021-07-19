import React, { useEffect,useCallback } from 'react';
import { useHistory, useParams } from 'react-router';
import { Box, makeStyles } from '@material-ui/core';
import { ButtonGeneric, InputGeneric } from '../../components';
import useForm from '../../hooks/useForm';
import { validateFormBrand } from '../../validations/validationCar';
import BrandService from '../../services/MarcaService';
const useStyles = makeStyles(() => ({
    actions: {
        marginRight: "10px"
    }
}));

 const CadastroMarca = () =>{
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const initialValues = {
        name: ''
    }
    const { values, errors, handleChange, handleSubmit, setValues } = useForm(
        initialValues,
        formControl,
        validateFormBrand,
        );

    async function formControl (){
        if (id) {
            const responseBrand =  await BrandService.alterar(id,values);
            setValues(responseBrand)
        } else {
            const responseBrand =  await BrandService.cadastrar(values);
            setValues(responseBrand)
        }
        history.push('/');
    }
    
    const cancelar = () =>{
        history.goBack();
    }

    const getUser = useCallback(async(id) =>{
       const responseBrand =  await BrandService.consultar(id);
       setValues(responseBrand)
    },[setValues])
   
    useEffect(() => {    
        if(id){

            getUser(id)
        } 
    }, [id, getUser]); 

    return (
        <form onSubmit={handleSubmit} >
            <InputGeneric
                name="name"
                value={values.name}
                handleChange={handleChange}
                helperText={errors.name}
                error={!!errors.name}
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