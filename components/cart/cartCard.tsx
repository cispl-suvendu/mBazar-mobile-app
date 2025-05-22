import { useAppDispatch } from '@/store/hooks'
import { handleRemoveCartItem } from '@/store/slices/productSlice'
import { Product } from '@/types'
import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'

export default function CartCard({ item }: { item: Product }) {
    const dispath = useAppDispatch()
    return (
        <View className='flex flex-row justify-between items-center gap-6 mb-4 pb-4 border-b-2 border-gray'>
            <View className='bg-gray w-[90px] h-[90px] rounded-2xl border border-gray flex justify-center items-center'>
                <Image source={{ uri: item.thumbnail }} style={{ width: 90, height: 90 }} className='object-contain' />
            </View>
            <View className='text-left flex-1'>
                <Text className='font-JostSemiBold text-black text-listTitle leading-none'>{item.title}</Text>
                <Text className='font-InterMedium text-paragraph text-accent mt-1'>${item.price}</Text>
                <View className='mt-2'>
                    <TouchableHighlight onPress={() => dispath(handleRemoveCartItem(item))} activeOpacity={0.2}
                        underlayColor="">
                        <Text className='font-icon text-red text-mediumTitle'>delete</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View>
                <View className='bg-white rounded-full px-2 border border-gray'>
                    <View className='flex flex-row justify-between items-center'>
                        {/* <TouchableHighlight className='p-2' activeOpacity={0.2}
                            underlayColor=""
                            onPress={() => alert('hello')}>
                            <Text className='font-icon text-mediumTitle text-grayDark '>do_not_disturb_on</Text>
                        </TouchableHighlight> */}
                        <Text className='font-InterSemiBold text-grayDark text-mediumTitle'>{item.quantity}</Text>
                        {/* <TouchableHighlight className='p-2' activeOpacity={0.2}
                            underlayColor=""
                            onPress={() => alert('hello')}>
                            <Text className='font-icon text-mediumTitle text-grayDark '>add_circle</Text>
                        </TouchableHighlight> */}
                    </View>
                </View>
            </View>
        </View>
    )
}