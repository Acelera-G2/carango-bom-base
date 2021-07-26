import React, { useEffect,useCallback } from 'react';
import { useHistory, useParams } from 'react-router';
import { Box, makeStyles } from '@material-ui/core';
import { ButtonGeneric, InputGeneric } from '../../components';
import useForm from '../../hooks/useForm';
import { validateFormUser } from '../../validations/validation';
import BrandService from '../../services/BrandService/BrandService';
const useStyles = makeStyles(() => ({
    actions: {
        marginRight: "10px"
    }
}));

 const RegisterUser = () =>{
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const initialValues = {
        name: '',
        password: '',
        confirmPassword: '',
    }
    const { values, errors, handleChange, handleSubmit, setValues } = useForm(
        initialValues,
        formControl,
        validateFormUser,
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
       const responseUser =  await BrandService.consultar(id);
       setValues(responseUser)
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
                id="name"
                value={values.name}
                handleChange={handleChange}
                helperText={errors.name}
                error={!!errors.name}
                label="Usuário"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <InputGeneric
                name="password"
                value={values.password}
                handleChange={handleChange}
                helperText={errors.password}
                error={!!errors.password}
                label="Senha de Acesso"
                id="senha"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <InputGeneric
                name="confirmPassword"
                value={values.confirmPassword}
                handleChange={handleChange}
                helperText={errors.confirmPassword}
                error={!!errors.confirmPassword}
                label="Confirmar senha"
                type="password"
                id="confirm-senha"
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

export default RegisterUser;