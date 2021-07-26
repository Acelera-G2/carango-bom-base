import React, { useEffect,useCallback } from 'react';
import { useHistory, useParams } from 'react-router';
import { Box, makeStyles } from '@material-ui/core';
import { ButtonGeneric, InputGeneric } from '../../components';
import useForm from '../../hooks/useForm';
import { validateFormUser } from '../../validations/validation';
import UserService from '../../services/UserService/UserService';
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
        username: '',
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
            const responseBrand =  await UserService.alterar(id,values);
            setValues(responseBrand)
        } else {
            const responseBrand =  await UserService.cadastrar(values);
            setValues(responseBrand)
        }
        history.push('/list-user');
    }
    
    const cancelar = () =>{
        history.goBack();
    }

    const getUser = useCallback(async(idUser) =>{
       const responseUser =  await UserService.consultar(idUser);
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
                name="username"
                id="username"
                value={values.username}
                handleChange={handleChange}
                helperText={errors.username}
                error={!!errors.username}
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