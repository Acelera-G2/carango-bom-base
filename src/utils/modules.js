export const CrudModule = () =>{

    const addItemsGenerif = (nameGetItem, itemBrand) =>{
        let existItem = localStorage.getItem(nameGetItem);
        existItem = existItem ? existItem.split(',') : [];        
        existItem.push(itemBrand);

       return localStorage.setItem(nameGetItem,existItem.toString());
    }

    return {
        add: addItemsGenerif
    }
}