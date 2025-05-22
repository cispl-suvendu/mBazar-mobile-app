import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Categoryskeleton() {
    return (
        <TouchableOpacity>
            <View className='items-center flex-row gap-2 bg-gray px-5 py-2 rounded-full text-white mr-2 shadow-[0_0_2px_textAccentLight] w-36 h-12'>
                <Text className='font-icon text-white text-xlTitle bg-white h-4 w-full rounded-2xl'></Text>
            </View>
        </TouchableOpacity>
    )
}