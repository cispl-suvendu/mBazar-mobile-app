import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

export default function SingleProductSkeleton() {
    return (
        <View className='p-4'>
            <View className='flex justify-center items-center w-full h-[260px] bg-gray rounded-2xl mx-auto'>
            </View>
            <View className='py-6 px-4'>
                <View className='pr-16 relative'>
                    <TouchableHighlight className='absolute right-4 top-1 w-12 h-12 rounded-full' activeOpacity={0.6}
                        underlayColor="#DDDDDD">
                        <View className='bg-white w-12 h-12 rounded-full shadow-[0_6px_20px_text-shadow] flex justify-center items-center'>
                            <Text className={`font-icon text-bigTitle text-black}`}></Text>
                        </View>
                    </TouchableHighlight>
                    <View className='inline-flex w-auto flex-row flex-grow-0'>
                        <Text className='bg-accent text-white font-InterMedium text-smalTitle px-3 py-1 rounded-3xl inline-block w-28'></Text>
                    </View>
                    <View className='mt-3 mb-2'>
                        <Text className='font-InterSemiBold text-listTitle text-grayDark leading-none h-4 bg-gray w-full'></Text>
                    </View>
                    <View>
                        <Text className='font-JostSemiBold text-bigTitle text-black leading-snug bg-gray w-full h-12'></Text>
                    </View>
                    <View className='mt-2'>
                        <Text className='text-grayDark font-InterSemiBold text-smalTitle w-full h-4 bg-gray'></Text>
                    </View>
                    <View className='py-4'>
                        <Text className='font-InterLight text-paragraph text-graydark leading-normal bg-gray h-40 w-full'></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}