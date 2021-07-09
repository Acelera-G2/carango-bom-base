import React, { useEffect, useState } from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router';

import ButonGeneric from '../../components/Button/ButtonGeneric';
import { CrudModule } from '../../utils/modules';

const colunas = [
    { field: 'nome', headerName: 'Marca', width: 200 }
];

const useStyles = makeStyles(() => ({
    fab: {
        position: 'absolute',
        bottom: '100px',
        right: '100px',
    },
    actionsToolbar: {
        float: 'right'
    },
    actions: {
        top: '10px',
        marginLeft: '10px',
    }
}));

function ListagemMarcas() {
    const [marcas, setMarcas] = useState([]);
    const [arrIndexItems, setArrIndexItems] = useState([]);
    const [marcaSelecionada, setMarcaSelecionada] = useState();
    const classes = useStyles();
    const history = useHistory();

    function alterar() {
        history.push('/change-brand/' + arrIndexItems[0]);
    }

    function excluir() {
        const arrItem = localStorage.getItem('item');
        const deleteItem = CrudModule('item');
        deleteItem.delete(arrItem,arrIndexItems);
        history.go(0);
    }

    useEffect(() => carregarMarcas(), []);

    function carregarMarcas() {
        
        const listBrand = localStorage.getItem("item");
        
        if(listBrand){
            const arrListBrand = listBrand.split(',').map((item, index) => {
                const obj = {id:index,nome: item};
                return obj
            })
            setMarcas(arrListBrand);
        }
        else{
            setMarcas([])
        }

    }

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={marcas} columns={colunas} checkboxSelection 
                onSelectionModelChange={data =>setArrIndexItems(data.selectionModel)}
                onRowSelected={gridSelection => setMarcaSelecionada(gridSelection.data)}
            />
            <div className={classes.actionsToolbar}>
                <ButonGeneric
                    className={classes.actions}
                    variant="outlined"
                    color="secondary"
                    disabled={!marcaSelecionada}
                    onClick={() => excluir()}
                    text="Excluir"
                />
                
                <ButonGeneric
                    className={classes.actions}
                    variant="outlined"
                    color="primary"
                    disabled={arrIndexItems.length >= 2 || !marcaSelecionada }
                    onClick={() => alterar()}
                    text="Alterar :)"
                />
            </div>

            <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => history.push('/register-brand')}>
                <AddIcon />
            </Fab>
        </div>
    );
}

export default ListagemMarcas;