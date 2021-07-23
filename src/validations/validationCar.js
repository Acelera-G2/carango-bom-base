function validateFormBrand(values) {
    let errors = {};
    if (values.name.length < 3) {
       errors.name = 'Tem que ser maior que 3 caracteres';
    }
    return errors
}

function validateFormCar(values) {
    let errors = {};
    if (values.model.length < 3) {
       errors.model = 'Modelo tem que ser maior que 3 caracteres.';
    }
    if (values.year.length < 3) {
        errors.year = 'Ano tem que ser maior que 3 caracteres.';
    }
    if (values.value.length < 3) {
    errors.value = 'Valor tem que ser maior que 3 caracteres.';
    }
    if (values.brandId.length < 3) {
        errors.brandId = 'Tem que ser maior que 3 caracteres';
    }
    return errors
}

export {
    validateFormBrand,
    validateFormCar,
}
    