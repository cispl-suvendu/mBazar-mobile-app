import { addressFronValidationSchema, initialValues } from '@/constants/deleviryAddress';
import { DeliveryAddressFormProps, FormFieldProps } from '@/types';
import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function DeliveryAddressForm({ onSubmit }: DeliveryAddressFormProps) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={addressFronValidationSchema}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View>
                    <FormField
                        label="Full Name"
                        value={values.fullName}
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        error={touched.fullName ? errors.fullName : ''}
                    />
                    <FormField
                        label="Phone Number"
                        value={values.phone}
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        error={touched.phone ? errors.phone : ''}
                        keyboardType="phone-pad"
                    />
                    <FormField
                        label="Address Line 1"
                        value={values.addressLine1}
                        onChangeText={handleChange('addressLine1')}
                        onBlur={handleBlur('addressLine1')}
                        error={touched.addressLine1 ? errors.addressLine1 : ''}
                    />
                    <FormField
                        label="Address Line 2"
                        value={values.addressLine2}
                        onChangeText={handleChange('addressLine2')}
                        onBlur={handleBlur('addressLine2')}
                        error={touched.addressLine2 ? errors.addressLine2 : ''}
                    />
                    <FormField
                        label="City"
                        value={values.city}
                        onChangeText={handleChange('city')}
                        onBlur={handleBlur('city')}
                        error={touched.city ? errors.city : ''}
                    />
                    <FormField
                        label="State"
                        value={values.state}
                        onChangeText={handleChange('state')}
                        onBlur={handleBlur('state')}
                        error={touched.state ? errors.state : ''}
                    />
                    <FormField
                        label="Zip Code"
                        value={values.zipCode}
                        onChangeText={handleChange('zipCode')}
                        onBlur={handleBlur('zipCode')}
                        error={touched.zipCode ? errors.zipCode : ''}
                        keyboardType="number-pad"
                    />
                    <View className='mt-6'>
                        <TouchableHighlight activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                            onPress={() => handleSubmit()} className='bg-accent px-8 py-5 rounded-full'>
                            <Text className='font-InterSemiBold text-white text-listTitle capitalize leading-none text-center'>complete checkout</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            )}
        </Formik>
    );
};

const FormField = ({
    value,
    onChangeText,
    onBlur,
    error,
    keyboardType = 'default',
    label
}: FormFieldProps) => (
    <View className='mt-4'>
        <TextInput
            placeholder={label}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            keyboardType={keyboardType}
            className="w-full border border-gray px-4 rounded-full bg-white text-listTitle font-InterSemiBold text-black h-14 shadow-[2_2_26_0_text-accentDark]"
        />
        {error ? <Text className='text-red font-InterMedium text-smalTitle mt-2 pl-2'>{error}</Text> : null}
    </View>
);


