import { AddressFormValues } from '@/types';
import * as Yup from 'yup';

export const addressFronValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
    addressLine1: Yup.string().required('Address Line 1 is required'),
    addressLine2: Yup.string(),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipCode: Yup.string()
        .matches(/^\d{6}$/, 'Zip code must be 5 digits')
        .required('Zip code is required'),
});

export const initialValues: AddressFormValues = {
        fullName: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
    };