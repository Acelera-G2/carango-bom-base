import React, { useEffect, useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {Box, makeStyles,MenuItem} from '@material-ui/core';
import {ButtonGeneric, InputGeneric} from '../../components';
import useForm from '../../hooks/useForm';
import { validateFormCar } from '../../validations/validation';
import VehicleService from '../../services/VehicleService/VehicleService';
import BrandService from '../../services/BrandService/BrandService';
const useStyles = makeStyles(() => ({
    actions: {
        marginRight: "10px"
    }
}));

function RegisterCar() {
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const [listBrand, setListBrand] = useState([])
    const initialValues = {
        brandId:'',
        model: '',
        year: '',
        value: '',
    }
    
    const { values, errors, handleChange, handleSubmit, setValues } = useForm(
        initialValues,
        formControl,
        validateFormCar,
    );

    async function formControl (){
        if (id) {
            const responseVehicle =  await VehicleService.alterar(id,values);
            setValues(responseVehicle)
        } else {
            const responseVehicle =  await VehicleService.cadastrar(values);
            setValues(responseVehicle)
        }
        history.push('/list-car');
    }
    function cancelar() {
        history.goBack();
    }
    
    const getVehicle = useCallback(async(id) =>{
        const responseVehicle =  await VehicleService.consultar(id);
        setValues(responseVehicle)
     },[setValues])

     const getBrand = async() =>{
        const response =  await BrandService.listar();
        setListBrand(response?.content);
     }

    useEffect(() => {
        if(id){
            getVehicle(id)
        } 
        getBrand()
        return () => {
            setListBrand([]);
          };
    }, [id, getVehicle]); 

    return (
        <form onSubmit={handleSubmit}>
            <InputGeneric
                value={values.brandId}
                handleChange={ handleChange }
                id="brandId"
                label="Marca"
                name="brandId"
                variant="outlined"
                fullWidth
                type="selec"
                required
                margin="normal"
                select={true}
                defaultValue={34}
                dataTestId="select"
            >
                {listBrand?.map((option, index) => (
                <MenuItem key={option.id} value={option.id}>
                    {option.name}
                </MenuItem>
            ))}
            </InputGeneric>
            <InputGeneric
                value={values.model}
                handleChange={ handleChange }
                helperText={errors.model}
                error={!!errors.model}
                name="model"
                id="model"
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
                value={values.value}
                handleChange={handleChange}
                helperText={errors.value}
                error={!!errors.value}
                name="value"
                id="value"
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