import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {Box, makeStyles} from '@material-ui/core';
import useErros from '../../hooks/useErros';

import ButonGeneric from '../../components/Button/ButtonGeneric'
import InputGeneric from '../../components/input/Input';
import { CrudModule } from '../../utils/modules';

const useStyles = makeStyles(() => ({
    actions: {
        marginRight: "10px"
    }
}));

function CadastroMarca() {
    const classes = useStyles()
    const [marca, setMarca] = useState("");

    const history = useHistory();
    const itemCrud = CrudModule('item');

    const { id } = useParams();

    const validacoes = {
        marca: dado => {
            if (dado && dado.length >= 3) {
                return { valido: true };
            } else {
                return { valido: false, texto: "Marca deve ter ao menos 3 letras." }
            }
        }
    }

    const registerLocalStorage = () =>{
        if (possoEnviar()) {
            if (id) {
                itemCrud.editItem(id,marca)
            } else {
                itemCrud.add(marca)
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
                setMarca(itemCrud.getItem(id))
        }
    }, [id]); // eslint-disable-line

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <InputGeneric
                value={marca}
                onChange={evt => setMarca(evt.target.value)}
                onBlur={validarCampos}
                helperText={erros.marca.texto}
                error={!erros.marca.valido}
                name="marca"
                id="marca"
                label="Marca"
                type="text"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />

            <Box display="flex" justifyContent="flex-end">
                
                <ButonGeneric
                    variant="outlined"
                    color="secondary"
                    onClick={cancelar}
                    text="Cancelar"
                    className={classes.actions}
                />

                <ButonGeneric
                    variant="outlined"
                    color="primary"
                    type="submit"
                    disabled={!possoEnviar()}
                    text={id ? 'Alterar' : 'Cadastrar'}
                    onClick={registerLocalStorage}
                />
            </Box>
                
        </form>
    );
}

export default CadastroMarca;