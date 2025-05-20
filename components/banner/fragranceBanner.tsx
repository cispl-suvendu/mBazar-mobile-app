import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function FragranceBanner() {
    const router = useRouter()
    return (
        <View className="p-4">
            <View className="w-full p-6 bg-gray rounded-2xl overflow-hidden">
                <TouchableOpacity onPress={() => router.replace('/shop/fragrances')} activeOpacity={0.6}>
                    <View className="flex-row items-center justify-between">
                        <Image source={require('@/assets/images/img_fragrance.png')} style={{ width: 180, height: 128 }} className="bg-contain" />
                        <View className="flex-col flex-1">
                            <Text className="font-JostSemiBold text-bigTitle text-black mb-1 leading-none">Fragrances & Beauty</Text>
                            <Text className="font-InterMedium text-graydark text-smalTitle">Delivered to Your Door</Text>
                            <Text className="font-InterMedium text-accent underline text-paragraph mt-4">Order Now</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}