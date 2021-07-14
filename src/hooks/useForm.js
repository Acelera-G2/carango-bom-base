import { useState, useEffect } from 'react';

const useForm = (initialValues, callback, validate) => {
   const [values, setValues] = useState(initialValues);
   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);

   useEffect(() => {
      if (isSubmitting && Object.keys(errors).length === 0) {
         callback();
      }
   }, [errors, isSubmitting]);   

   const handleSubmit = event => {
      if (event) event.preventDefault();
      setErrors(validate(values));
      setIsSubmitting(true);
   };

   const handleChange = event => {
      const { name, value } = event.target;
      setValues(values => ({ ...values, [name]: value }));
   };

   return {
      handleChange,
      handleSubmit,
      setValues,
      values,
      errors,
   };
};

export default useForm;

