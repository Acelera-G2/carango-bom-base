import React from 'react'
import { ButtonGeneric } from '../Button/ButtonGeneric';
import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { DataGrid } from '@material-ui/data-grid';
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
const TableGrid = (props) =>{
    const {
        columns,
        rows,
        updateItem,
        deleteItem,
        addItem,
        onRowSelected,
        disabled
    } = props;
    const classes = useStyles();

    return(
       
         <div style={{ height: 300, width: '100%' }}>
                <DataGrid rows={rows || []} columns={columns} pageSize={5}
                    onRowSelected={(gridSelection) => onRowSelected(gridSelection.data)}

                />
                <div className={classes.actionsToolbar}>
                    <ButtonGeneric
                    className={classes.actions}
                    variant="outlined"
                    color="secondary"
                    onClick={deleteItem}
                    disabled={disabled}
                    text="Excluir"
                    arial-label="Delete"
                    />
                    <ButtonGeneric
                    className={classes.actions}
                    variant="outlined"
                    color="primary"
                    onClick={updateItem}
                    text="Alterar"
                    aria-label="Edit"
                    disabled={disabled}
                    />
                </div>
                <Fab color="primary" data-testid="adicionar" aria-label="add" className={classes.fab} onClick={addItem}>
                    <AddIcon />
                </Fab>
            </div>
       
    )
}

export {TableGrid}