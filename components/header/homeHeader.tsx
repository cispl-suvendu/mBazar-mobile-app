import { images } from '@/constants/images'
import React from 'react'
import { Image, Text, View } from 'react-native'

export default function HomeHeader() {
    return (
        <View className="flex-row items-center justify-between p-4 flex-wrap pt-10">
            <View className="flex-col gap-1 flex-1">
                <Text className="text-white font-JostSemiBold text-bigTitle m-0 leading-none">Welcome, Suvendu</Text>
                <View className="flex-row gap-2 items-center">
                    <Text className="font-icon text-white text-mediumTitle">location_on</Text>
                    <Text className="text-white font-InterSemiBold text-smalTitle font-semibold">32 Anandya Auddy Lane, Sheoraphuli, Hooghy</Text>
                </View>
            </View>
            <View>
                <Image source={images.User} className="w-14 h-14 rounded-full border-2 border-white" />
            </View>
        </View>
    )
}