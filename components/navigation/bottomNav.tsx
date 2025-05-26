import { useAppSelector } from '@/store/hooks'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

export default function BottomNav() {
    const router = useRouter()
    const { cartItms } = useAppSelector(state => state.products)
    return (
        <View className='flex flex-row justify-between items-start bg-white fixed bottom-0 left-0 w-full px-7 py-4 border-t-2 border-gray z-10' style={{ position: 'fixed' }}>
            <Pressable onPress={() => router.replace('/')}>
                <Text className='font-icon text-bigTitle'>home</Text>
            </Pressable>
            <Pressable onPress={() => router.replace('/(tabs)/shop/shop')}>
                <Text className='font-icon text-bigTitle'>storefront</Text>
            </Pressable>
            <Pressable onPress={() => router.replace('/(tabs)/wishlist')}>
                <Text className='font-icon text-bigTitle'>favorite</Text>
            </Pressable>
            <Pressable onPress={() => router.replace('/(tabs)/cart')}>
                {cartItms.length > 0 && (
                    <Text className='bg-accent w-6 h-6 rounded-full text-white text-xsTitle text-center font-InterSemiBold absolute -right-3 -top-[3px] z-10 leading-[28px]]'>{cartItms.length ?? 0}</Text>
                )}
                <Text className='font-icon text-bigTitle'>shopping_basket</Text>
            </Pressable>
            <Pressable onPress={() => router.replace('/(tabs)/search')}>
                <Text className='font-icon text-bigTitle'>search</Text>
            </Pressable>
        </View>
    )
}