import { Product } from '@/types'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'

export default function TopDealCard({ item }: { item: Product }) {
    const router = useRouter()
    return (
        <View className='w-[274px]'>
            <View className='flex-row items-center gap-2 rounded-2xl overflow-hidden bg-white shadow-[0_6px_20px_text-shadow] mr-4'>
                <View className='bg-gray w-[102px] h-[116px] flex items-center justify-center'>
                    <Image source={{ uri: item.thumbnail }} style={{ width: 80, height: 80 }} className='w-full object-contain' />
                </View>
                <View className='flex-1 px-2'>
                    <Text className='font-JostSemiBold text-mediumTitle text-black leading-none mb-2'>{item.discountPercentage}% off</Text>
                    <Text className='font-InterSemiBold text-graydark text-smalTitle leading-tight'>On {item.title}</Text>
                    <TouchableHighlight className='mt-2' activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => router.replace(`/product/${item.id}`)}>
                        <View className='flex-row items-center justify-start'>
                            <Text className='font-InterMedium text-paragraph text-accent capitalize'>grab deals</Text>
                            <Text className='font-icon text-accent text-mediumTitle'>chevron_right</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}