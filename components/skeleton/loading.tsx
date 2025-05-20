import React from 'react'
import { Image, View } from 'react-native'

export default function Loading() {
    return (
        <View className='bg-accent flex-col flex-1'>
            <Image source={require('@/assets/images/splash.png')} className='w-full h-auto object-contain flex-1' resizeMethod="scale" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </View >
    )
}