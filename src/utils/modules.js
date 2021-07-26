export const CrudModule = (localStorageItem) =>{
    let getLocalStorage = localStorage.getItem(localStorageItem);

    const addItemGeneric = (itemArr) => {
        getLocalStorage = getLocalStorage ? getLocalStorage.split(',') : [];        
        getLocalStorage.push(itemArr);
    return localStorage.setItem(localStorageItem,getLocalStorage.toString());
    }
    
    const deleteItemGeneric = ( itemArr, arrIndexItems) => {
        getLocalStorage = itemArr.split(',');
        getLocalStorage = getLocalStorage.filter(function(_, index) {
            return arrIndexItems.map(Number).indexOf(index) === -1;
    })
    return localStorage.setItem(localStorageItem,getLocalStorage.toString());
    }

    const getItemGeneric = (itemIndex) => {
        getLocalStorage = getLocalStorage.toString().split(',').filter((_, index) => index === parseInt(itemIndex))
        return getLocalStorage[0]
    }

    const editItemGeneric = (itemIndex, valueGeneric) => {
        getLocalStorage = getLocalStorage.split(',').map((itemGeneric, index) => {
        return index === parseInt(itemIndex) ? valueGeneric : itemGeneric
        })
        return localStorage.setItem(localStorageItem,getLocalStorage.toString());
    }
    return {
        add: addItemGeneric,
        delete: deleteItemGeneric,
        getItem: getItemGeneric,
        editItem: editItemGeneric
    }
}