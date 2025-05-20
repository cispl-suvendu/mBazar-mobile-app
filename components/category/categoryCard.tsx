import { getCategoryIcon } from '@/constants/categoyIcon'
import { CategoryCardProps } from '@/types'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function CategoryCard({ item, topBannerItem, bottomRoundedItem, categoryPageItem }: CategoryCardProps) {
    const router = useRouter()
    return (
        <TouchableOpacity onPress={() => router.replace(`/shop/${item.slug}`)}>
            <View className={`items-center ${bottomRoundedItem ? 'flex-col justify-center gap-4 mr-6' : categoryPageItem ? 'flex-row gap-2 bg-white px-5 py-2 rounded-full text-white mr-2 shadow-[0_0_2px_textAccentLight]' : 'flex-row gap-2 bg-accentLight px-5 py-2 rounded-full text-white mr-2 shadow-[0_0_2px_textAccentLight]'}`}>
                {bottomRoundedItem ? <View className='bg-gray w-[70px] h-[70px] rounded-full flex-row items-center justify-center'><Text className='font-icon text-balack text-[30px]'>{getCategoryIcon(item.slug)}</Text></View> : categoryPageItem ? <Text className='font-icon text-black text-xlTitle'>{getCategoryIcon(item.slug)}</Text> : <Text className='font-icon text-white text-xlTitle'>{getCategoryIcon(item.slug)}</Text>}
                <Text className={`${bottomRoundedItem ? 'text-graydark text-smalTitle font-InterMedium' : categoryPageItem ? 'text-black font-InterSemiBold text-smalTitle' : 'text-white font-InterSemiBold text-smalTitle'}`}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}