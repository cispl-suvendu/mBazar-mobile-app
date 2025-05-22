import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

export default function ProductSkeleton() {
    return (
        <View className='w-[168px]'>
            <View className="rounded-2xl overflow-hidden bg-white shadow-[0_6px_20px_text-shadow] mr-4 ">
                <View className='bg-gray flex items-center justify-center h-[124px] w-full'>
                </View>
                <View className='p-4'>
                    <Text className='font-JostSemiBold text-paragraph leading-[18px] text-black min-h-10 bg-gray'></Text>
                    <View className='flex-row justify-between items-center py-3'>
                        <View>
                            <Text className='font-InterSemiBold text-smalTitle text-graydark leading-none mb-2'>Price</Text>
                            <Text className='font-InterSemiBold text-listTitle text-accent leading-none h-5 bg-gray'></Text>
                        </View>
                        <TouchableHighlight activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                            className='w-[34px] h-[34px] bg-gray rounded-full flex items-center justify-center shadow-[2px_3px_20px_accent]'>
                            <Text className='font-icon  text-listTitle text-white'>add</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </View>
    )
}