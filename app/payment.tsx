import BottomNav from '@/components/navigation/bottomNav';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearCart } from '@/store/slices/productSlice';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Payment() {
    const dispath = useAppDispatch();
    const router = useRouter()
    const { deliverAddress } = useAppSelector(state => state.user)
    const { cartItms } = useAppSelector(state => state.products)
    const cartTotal = cartItms.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0)
    const handlePlacedOrder = () => {
        dispath(clearCart())
        alert('Order placed successfully!');
        router.replace('/')
    }
    if (deliverAddress) {
        return (
            <>
                <SafeAreaProvider>
                    <SafeAreaView className='bg-white flex-1'>
                        <ScrollView>
                            <View className='bg-gray py-6 px-4 flex flex-row justify-between items-center'>
                                <Text className='font-JostSemiBold text-bigTitle text-black'>Order Total</Text>
                                <Text className='font-InterSemiBold text-listTitle font-semibold text-accent'>${Math.round(cartTotal)}</Text>
                            </View>
                            <View className='px-4'>
                                <View className='flex flex-row gap-2 items-center pt-2'>
                                    <Text className='font-icon text-accent text-[26px]'>payments</Text>
                                    <Text className='font-InterMedium text-listTitle text-black capitalize'>Payment Mathod</Text>
                                </View>
                                <View className='bg-white p-6 rounded-2xl mt-4 shadow-[2_2_26_0_text-accentDark]'>
                                    <View className='bg-gray w-32 h-32 rounded-full flex justify-center items-center mx-auto'>
                                        <Text className='font-icon text-darkGray text-[40px]'>payments</Text>
                                    </View>
                                    <Text className='font-JostSemiBold text-bigTitle text-black capitalize text-center mt-4 mb-4'>Cash On Delivery</Text>
                                    <Text className='text-graydark font-InterMedium text-paragraph text-center'>Cash on delivery (COD) is a payment method where customers pay for goods or services upon receiving them, typically at the time of delivery. </Text>
                                </View>
                            </View>
                            <View className='py-4 px-4'>
                                <View className='flex flex-row gap-2 items-center pt-2'>
                                    <Text className='font-icon text-accent text-[26px]'>local_shipping</Text>
                                    <Text className='font-InterMedium text-listTitle text-black capitalize'>delivery address</Text>
                                </View>
                                <View className='bg-white p-6 rounded-2xl mt-4 shadow-[2_2_26_0_text-accentDark]'>
                                    <Text className='text-graydark font-InterMedium text-paragraph'>{deliverAddress.fullName}</Text>
                                    <Text className='text-graydark font-InterMedium text-paragraph '>{deliverAddress.phone}</Text>
                                    <Text className='text-graydark font-InterMedium text-paragraph '>{deliverAddress.addressLine1} {deliverAddress.addressLine2 && `, ${deliverAddress.addressLine2} ,`}</Text>
                                    <Text className='text-graydark font-InterMedium text-paragraph '>{deliverAddress.city}, {deliverAddress.state}- {deliverAddress.zipCode}</Text>
                                </View>
                                <View className='mt-6 pb-12'>
                                    <TouchableHighlight activeOpacity={0.6}
                                        underlayColor="#DDDDDD"
                                        onPress={() => handlePlacedOrder()} className='bg-accent px-8 py-5 rounded-full'>
                                        <Text className='font-InterSemiBold text-white text-listTitle capitalize leading-none text-center'>placed order</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </SafeAreaProvider>
                <BottomNav />
            </>
        )
    }
    return null

}