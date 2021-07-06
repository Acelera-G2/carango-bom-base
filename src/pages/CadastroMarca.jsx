import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useErros from '../hooks/useErros';
import ButonGeneric from '../components/Button/ButtonGeneric';
import MarcaService from '../services/MarcaService';
import InputGeneric from '../components/input/InputGeneric';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    actions: {
      marginRight: 10,
    },
  }));

function CadastroMarca() {
    
    const classes = useStyles();
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

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    function cancelar() {
        history.goBack();
    }

    useEffect(() => {
        if (id) {
            MarcaService.consultar(id)
                .then(m => setMarca(m.nome));
        }
    }, [id]); 

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                if (id) {
                    MarcaService.alterar({ id, nome: marca })
                        .then(res => {
                            history.goBack();
                        });
                } else {
                    MarcaService.cadastrar({ nome: marca })
                        .then(res => {
                            setMarca("");
                            history.goBack();
                        });
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

            <Box display="flex" flexDirection="row-reverse">
                
                <ButonGeneric
                    variant="outlined"
                    color="primary"
                    type="submit"
                    disabled={!possoEnviar()}
                    text= {id ? 'Alterar' : 'Cadastrar'}
                />
                
                <ButonGeneric
                    variant="outlined"
                    color="secondary"
                    onclick={cancelar}
                    text="Cancelar"
                    className={classes.actions}
                />
            </Box>
                
        </form>
    );
}

export default CadastroMarca;