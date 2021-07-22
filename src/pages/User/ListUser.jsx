import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BrandService from '../../services/BrandService/BrandService';
import { TableGrid } from '../../components';

const columns = [
    { field: 'name', headerName: 'Marca', width: 200}
];

const listUser = [
    {id: 1, name:'Mathaus'},
    {id: 2, name:'Yanka'},
    {id: 3, name:'Renan'},
    {id: 4, name:'Leandro'}
]
function UserList() {
    const [userList, setUserList] = useState([]);
    const [selectUser,setSelectUser] = useState();
    const history = useHistory();

    function alterar() {
        history.push('/change-user/' + selectUser.id);
    }

    const excluir = async() => {
        // await UserService.excluir(selectBrand.id);
        setSelectUser(null)
        // history.go(0);
    }
    const UserChange = async () => {
        // const listBrand = await BrandService.listar();
        // setBrandList(listBrand?.content)
    }
    useEffect(() => {
        UserChange()
        return () => {
            setUserList([]);
          };
    }, []);

    return (
        <TableGrid  
            rows={listUser}
            columns={columns}
            updateItem={alterar}
            deleteItem={excluir}
            disabled={!selectUser }
            addItem={() => history.push('/register-user/')}
            onRowSelected={setSelectUser}
        />
    );
}

export default UserList;