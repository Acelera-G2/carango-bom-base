import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {Box, makeStyles} from '@material-ui/core';
import useErros from '../../hooks/useErros';

import { ButtonGeneric, InputGeneric } from '../../components/Index';
import { CrudModule } from '../../utils/modules';

const useStyles = makeStyles(() => ({
    actions: {
        marginRight: "10px"
    }
}));

function RegisterCar() {
    const classes = useStyles()
    const [objCar, setObjCar] = useState({
        moduleCar: '',
        year: '',
        price: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setObjCar(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const history = useHistory();
    const itemCrud = CrudModule('itemCar');

    const { id } = useParams();

    const validacoes = {
        objCar: dado => {
            if (dado && dado.length >= 3) {
                return { valido: true };
            } else {
                return { valido: false, texto: "objCar deve ter ao menos 3 letras." }
            }
        }
    }

    const registerLocalStorage = () =>{
        if (possoEnviar()) {
            if (id) {
                itemCrud.editItem(id,objCar)
            } else {
                itemCrud.add(objCar)
            }
        }
        history.goBack();
    }

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    function cancelar() {
        history.goBack();
    }

    // TODO: Avaliar remover disable na próxima linha
    useEffect(() => {
        if (id) {
                setObjCar(itemCrud.getItem(id))
        }
        console.log(objCar);
    }, [id, objCar]); // eslint-disable-line

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <InputGeneric
                value={objCar.moduleCar}
                onChange={ handleChange }
                // onBlur={validarCampos}
                // helperText={erros.objCar.texto}
                // error={!erros.objCar.valido}
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
                value={objCar.year}
                onChange={handleChange}
                // onBlur={validarCampos}
                // helperText={erros.objCar.texto}
                // error={!erros.objCar.valido}
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
                value={objCar.price}
                onChange={handleChange}
                // onBlur={validarCampos}
                // helperText={erros.objCar.texto}
                // error={!erros.objCar.valido}
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
                    // disabled={!possoEnviar()}
                    text={id ? 'Alterar' : 'Cadastrar'}
                    onClick={registerLocalStorage}
                />
            </Box>
                
        </form>
    );
}

export default RegisterCar;