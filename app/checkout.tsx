import BottomNav from '@/components/navigation/bottomNav';
import DeliveryAddressForm from '@/components/user/DeliveryAddressForm';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAddress } from '@/store/slices/userSlice';
import { AddressFormValues } from '@/types';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Checkout() {
    const dispath = useAppDispatch()
    const router = useRouter()
    const { cartItms } = useAppSelector(state => state.products)
    const cartTotal = cartItms.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0)

    const handleFormSubmit = (values:AddressFormValues) => {
        dispath(setAddress(values))
        router.replace('/payment')
    }

    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView className='bg-white flex-1'>
                    <View className='bg-gray py-12 px-4 flex flex-row justify-between items-center'>
                        <Text className='font-JostSemiBold text-bigTitle text-black'>Order Total</Text>
                        <Text className='font-InterSemiBold text-listTitle font-semibold text-accent'>${Math.round(cartTotal)}</Text>
                    </View>
                    <ScrollView className='px-4 py-6'>
                        <View className='flex flex-row gap-2 items-center pt-2'>
                            <Text className='font-icon text-accent text-[26px]'>local_shipping</Text>
                            <Text className='font-InterMedium text-listTitle text-black capitalize'>delivery address</Text>
                        </View>
                        <View className='pb-20'>
                            <DeliveryAddressForm onSubmit={(values: AddressFormValues) => handleFormSubmit(values)} />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
            <BottomNav />
        </>
    )
}