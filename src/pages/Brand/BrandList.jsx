import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BrandService from '../../services/BrandService/BrandService';
import { TableGrid } from '../../components';

const columns = [
    { field: 'name', headerName: 'Marca', width: 200}
];
function BrandList() {
    const [brandList, setBrandList] = useState([]);
    const [selectBrand,setSelectBrand] = useState();
    const history = useHistory();

    function alterar() {
        history.push('/change-brand/' + selectBrand.id);
    }

    const excluir = async() => {
        await BrandService.excluir(selectBrand.id);
        setSelectBrand(null)
        history.go(0);
    }
    const BrandChange = async () => {
        const listBrand = await BrandService.listar();
        setBrandList(listBrand?.content)
    }
    useEffect(() => {
        BrandChange()
        return () => {
            setBrandList([]);
          };
    }, []);

    return (
        <TableGrid  
            rows={brandList}
            columns={columns}
            updateItem={alterar}
            deleteItem={excluir}
            disabled={!selectBrand }
            addItem={() => history.push('/register-brand/')}
            onRowSelected={setSelectBrand}
        />
    );
}

export default BrandList;