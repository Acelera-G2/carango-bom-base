function validateFormBrand(values) {
    let errors = {};
    if (values.marca.length < 3) {
       errors.marca = 'Tem que ser maior que 3 caracteres';
    }
    return errors
}

function validateFormCar(values) {
    let errors = {};
    if (values.moduleCar.length < 3) {
       errors.moduleCar = 'Tem que ser maior que 3 caracteres';
    }
    if (values.year.length < 3) {
        errors.year = 'Tem que ser maior que 3 caracteres';
    }
    if (values.price.length < 3) {
    errors.price = 'Tem que ser maior que 3 caracteres';
    }
    return errors
}

export  {
    validateFormBrand,
    validateFormCar,
}
    