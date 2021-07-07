export const CrudModule = () =>{

    const addItemGeneric = (nameGetItem, itemArr) =>{
        let existItem = localStorage.getItem(nameGetItem);
        existItem = existItem ? existItem.split(',') : [];        
        existItem.push(itemArr);
       return localStorage.setItem(nameGetItem,existItem.toString());
    }

    const deleteItemGeneric = (nameGetItem, itemArr, arrIndexItems) =>{
        let item = localStorage.getItem(nameGetItem);
        item = itemArr.split(',');
        item = item.filter(function(_, index) {
            return arrIndexItems.indexOf(index) === -1;
       })
       return localStorage.setItem(nameGetItem,item.toString());
    }

    const getItemGeneric = (nameGetItem, itemIndex) => {
        let item = localStorage.getItem(nameGetItem);
        item = item.split(',').filter((_, index) => index === parseInt(itemIndex))
        return item[0]
    }

    const editItemGeneric = (nameGetItem, itemIndex, valueGeneric) => {
        let item = localStorage.getItem(nameGetItem);
        item = item.split(',').map((itemGeneric, index) => {
          return   index === parseInt(itemIndex) ? valueGeneric : itemGeneric
        })
        return localStorage.setItem(nameGetItem,item.toString());

    }
    return {
        add: addItemGeneric,
        delete: deleteItemGeneric,
        getItem: getItemGeneric,
        editItem: editItemGeneric
    }
}