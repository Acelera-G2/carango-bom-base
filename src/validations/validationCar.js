export default function validateFormCar(values) {
    let errors = {};
    if (!values.marca) {
       errors.marca = 'Campo obrigatório';
    }
    return errors
}
    