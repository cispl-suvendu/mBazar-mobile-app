import React from 'react'
import { Text, TextInput, View } from 'react-native'

export default function Search() {
    return (
        <View className="relative z-10">
            <Text className="font-icon absolute right-4 z-10 text-accent text-[26px] top-2/4 -translate-y-2/4">search</Text>
            <TextInput placeholder="Search our store" className="bg-white rounded-xl p-4 h-14 font-InterSemiBold text-listTitle text-graydark shadow-[2_2_26_0_text-accentDark]" />
        </View>
    )
}