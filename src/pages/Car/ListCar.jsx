import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import VehicleService from '../../services/VehicleService/VehicleService';
import { TableGrid } from '../../components';

const getBrand = (params) => {
    return params.value.name;
  }
const columns = [
    { field: 'brand', headerName: 'Marca', width: 200,valueGetter: getBrand,},
    { field: 'model', headerName: 'Modelo', width: 200 },
    { field: 'year', headerName: 'Ano', width: 200 },
    { field: 'value', headerName: 'Valor', width: 200 }
];

const ListCar = () => {
    const [listCars, setListCars] = useState([]);
    const [selectVehicle,setSelectVehicle] = useState();
    const history = useHistory();
    function alterar() {
        history.push(`/change-car/${selectVehicle.id}`);
    }

    const excluir = async() => {
        await VehicleService.excluir(selectVehicle);
        setSelectVehicle(null)
        history.go(0);
    }

    const VehicleChange = async () => {
        const listVehicle = await VehicleService.listar();
        setListCars(listVehicle?.content)
    }
    useEffect(() => {
        VehicleChange()
        return () => {
            setListCars([]);
          };
    }, []);

    return (
        <div style={{ height: 300, width: '100%' }}>
          <TableGrid  
            rows={listCars}
            columns={columns}
            updateItem={alterar}
            deleteItem={excluir}
            disabled={!selectVehicle }
            addItem={() => history.push('/register-car/')}
            onRowSelected={setSelectVehicle}
        />
        </div>
    );
}

export default ListCar;