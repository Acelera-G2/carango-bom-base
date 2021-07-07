export const CrudModule = () =>{

    const addItemGeneric = (nameGetItem, itemBrand) =>{
        let existItem = localStorage.getItem(nameGetItem);
        existItem = existItem ? existItem.split(',') : [];        
        existItem.push(itemBrand);
       return localStorage.setItem(nameGetItem,existItem.toString());
    }

    const deleteItemGeneric = (nameGetItem, itemBrand, arrIndexItems) =>{
        let item = localStorage.getItem(nameGetItem);
        item = itemBrand.split(',');
        item = item.filter(function(value, index) {
            return arrIndexItems.indexOf(index) == -1;
       })
       console.log(item)
       return localStorage.setItem(nameGetItem,item.toString());
    }

    return {
        add: addItemGeneric,
        delete: deleteItemGeneric
    }
}