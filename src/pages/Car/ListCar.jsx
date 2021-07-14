import React, { useEffect, useState } from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router';

import {ButtonGeneric} from '../../components';
import { CrudModule } from '../../utils/modules';

const colunas = [
    { field: 'brand', headerName: 'Marca', width: 200 },
    { field: 'moduleCar', headerName: 'Modelo', width: 200 },
    { field: 'year', headerName: 'Ano', width: 200 },
    { field: 'price', headerName: 'Valor', width: 200 }
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

function ListCar() {
    const [listCars, setListCars] = useState([]);
    const [arrIndexItems, setArrIndexItems] = useState([]);
    const [selectedCar, setSelectedCar] = useState();
    const classes = useStyles();
    const history = useHistory();

    function alterar() {
        history.push('/change-car/' + arrIndexItems[0]);
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
            setListCars(arrListBrand);
        }
        else{
            setListCars([])
        }

    }

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={listCars} columns={colunas} checkboxSelection 
                onSelectionModelChange={data =>setArrIndexItems(data.selectionModel)}
                onRowSelected={gridSelection => setSelectedCar(gridSelection.data)}
            />
            <div className={classes.actionsToolbar}>
                <ButtonGeneric
                    className={classes.actions}
                    variant="outlined"
                    color="secondary"
                    disabled={!selectedCar}
                    onClick={() => excluir()}
                    text="Excluir"
                />
                
                <ButtonGeneric
                    className={classes.actions}
                    variant="outlined"
                    color="primary"
                    disabled={arrIndexItems.length >= 2 || !selectedCar }
                    onClick={() => alterar()}
                    text="Alterar"
                />
            </div>

            <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => history.push('/register-car')}>
                <AddIcon />
            </Fab>
        </div>
    );
}

export default ListCar;