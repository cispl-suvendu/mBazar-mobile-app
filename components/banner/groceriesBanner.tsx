import { images } from '@/constants/images'
import { useRouter } from 'expo-router'
import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'

export default function GroceriesBanner() {
    const router = useRouter()
    return (
        <View className="p-4">
            <ImageBackground source={images.bgGroceries} className="w-full p-6 bg-cover shadow-[0_6px_20px_text-shadow] rounded-2xl overflow-hidden">
                <TouchableOpacity onPress={() => router.replace('/shop/groceries')} activeOpacity={0.6}>
                    <View className="flex-col items-center">
                        <Text className="bg-white text-accentLight font-InterMedium text-smalTitle px-4 py-1 rounded-3xl">New</Text>
                        <Text className="font-JostSemiBold text-bigTitle text-white mt-2 mb-1">Fresh Groceries</Text>
                        <Text className="font-InterMedium text-white text-smalTitle">Delivered to Your Door</Text>
                        <Text className="font-InterMedium text-white underline text-paragraph mt-4">Order Now</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}