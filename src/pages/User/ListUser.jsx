import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserService from '../../services/UserService/UserService';
import { TableGrid } from '../../components';

const columns = [
    { field: 'username', headerName: 'Users', width: 200}
];

function UserList() {
    const [userList, setUserList] = useState([]);
    const [selectUser,setSelectUser] = useState();
    const history = useHistory();

    function alterar() {
        history.push('/change-user/' + selectUser);
    }

    const excluir = async() => {
        await UserService.excluir(selectUser);
        setSelectUser(null)
        history.go(0);
    }
    const UserChange = async () => {
        const listUser = await UserService.listar();
        setUserList(listUser?.content)
    }
    useEffect(() => {
        UserChange()
        return () => {
            setUserList([]);
          };
    }, []);

    return (
        <TableGrid  
            rows={userList}
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