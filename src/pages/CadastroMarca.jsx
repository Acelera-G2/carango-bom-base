import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {Box, makeStyles} from '@material-ui/core';

import useErros from '../hooks/useErros';
import MarcaService from '../services/MarcaService';
import ButonGeneric from '../components/Button/ButtonGeneric'
import InputGeneric from '../components/input/Input';
import { CrudModule } from '../utils/modules';

const useStyles = makeStyles(() => ({
    actions: {
        marginRight: "10px"
    }
}));

function CadastroMarca() {
    const classes = useStyles()
    const [marca, setMarca] = useState("");

    const history = useHistory();

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
        const addBrand = CrudModule()
        addBrand.add('item', marca)
        history.goBack();
    }

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    function cancelar() {
        history.goBack();
    }

    // TODO: Avaliar remover disable na próxima linha
    useEffect(() => {
        if (id) {
            MarcaService.consultar(id)
                .then(m => setMarca(m.nome));
        }
    }, [id]); // eslint-disable-line

    return (
        <form onSubmit={(event) => {
            console.log(event)
            event.preventDefault();
            if (possoEnviar()) {
                if (id) {
                    MarcaService.alterar({ id, nome: marca })
                        .then(res => {
                            history.goBack();
                        });
                } else {
                   registerLocalStorage()
                }
            }
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
                    color="primary"
                    type="submit"
                    disabled={!possoEnviar()}
                    text={id ? 'Alterar' : 'Cadastrar'}
                    className={classes.actions}
                    onClick={registerLocalStorage}
                />

                <ButonGeneric
                    variant="outlined"
                    color="secondary"
                    onClick={cancelar}
                    text="Cancelar"
                />
            </Box>
                
        </form>
    );
}

export default CadastroMarca;