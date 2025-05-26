import { images } from '@/constants/images'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchIpInfo } from '@/store/slices/userSlice'
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'

export default function HomeHeader() {
    const {name, savedName, ipInfo} = useAppSelector(state => state.user)
    const dispath = useAppDispatch()
    useEffect(() => {
        dispath(fetchIpInfo())
    },[])
    return (
        <View className="flex-row items-center justify-between p-4 flex-wrap pt-10">
            <View className="flex-col gap-1 flex-1">
                <Text className="text-white font-JostSemiBold text-bigTitle m-0 leading-none">Welcome, {savedName ? savedName : name}</Text>
                <View className="flex-row gap-2 items-center">
                    <Text className="font-icon text-white text-mediumTitle">location_on</Text>
                    <Text className="text-white font-InterSemiBold text-smalTitle font-semibold">{`${ipInfo?.city}, ${ipInfo?.region}-${ipInfo?.postal}, ${ipInfo?.country}`}</Text>
                </View>
            </View>
            <View>
                <Image source={images.User} className="w-14 h-14 rounded-full border-2 border-white" />
            </View>
        </View>
    )
}