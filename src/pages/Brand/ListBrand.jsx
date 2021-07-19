    import React, { useEffect, useState } from 'react';
    import { Fab, makeStyles } from '@material-ui/core';
    import { DataGrid } from '@material-ui/data-grid';
    import AddIcon from '@material-ui/icons/Add';
    import { useHistory } from 'react-router';
    import { ButtonGeneric } from '../../components';
    import BrandService from '../../services/BrandService/BrandService';

    const colunas = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'name', headerName: 'Marca', width: 200 }
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

    function BrandList() {
        const [brandList, setBrandList] = useState([]);
        const [arrIndexItems, setArrIndexItems] = useState([]);
        const [marcaSelecionada, setMarcaSelecionada] = useState();
        const classes = useStyles();
        const history = useHistory();

        function alterar() {
            history.push('/change-brand/' + arrIndexItems[0]);
        }

        const excluir = async() => {
            await BrandService.excluir(arrIndexItems[0]);
            history.go(0);
        }
        const BrandChange = async () => {
            const listBrand = await BrandService.listar();
            setBrandList(listBrand.content)
        }
        useEffect(() => BrandChange(), []);

        return (
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid rows={brandList} columns={colunas} checkboxSelection 
                    onSelectionModelChange={data =>setArrIndexItems(data.selectionModel)}
                    onRowSelected={gridSelection => setMarcaSelecionada(gridSelection.data)}
                />
                <div className={classes.actionsToolbar}>
                    <ButtonGeneric
                        className={classes.actions}
                        variant="outlined"
                        color="secondary"
                        disabled={!marcaSelecionada}
                        onClick={() => excluir()}
                        text="Excluir"
                    />
                    
                    <ButtonGeneric
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

    export default BrandList;