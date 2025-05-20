import { EmptyPageProps } from '@/types'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

export default function EmptyPage({ title, description, linkLable, linkUrl, icon }: EmptyPageProps) {
    const router = useRouter()
    return (
        <View className='w-full pt-16'>
            <View className='bg-gray w-32 h-32 rounded-full flex justify-center items-center mx-auto'>
                <Text className='font-icon text-darkGray text-[40px]'>{icon}</Text>
            </View>
            <Text className='font-JostSemiBold text-bigTitle text-black capitalize text-center mt-4 mb-4'>{title}</Text>
            <Text className='text-graydark font-InterMedium text-paragraph text-center mb-10'>{description}</Text>
            <TouchableHighlight activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => router.replace(linkUrl)} className='bg-accent px-8 py-5 rounded-full'>
                <Text className='font-InterSemiBold text-white text-listTitle capitalize leading-none text-center'>{linkLable}</Text>
            </TouchableHighlight>
        </View>
    )
}