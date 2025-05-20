import { useAppDispatch } from '@/store/hooks'
import { handleRemoveWishListItem } from '@/store/slices/productSlice'
import { Product } from '@/types'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'
import { useToast } from 'react-native-toast-notifications'

export default function WishListCard({ item }: { item: Product }) {
    const toast = useToast();
    const dispath = useAppDispatch()
    const router = useRouter()
    const handleRemoveWishList = (item: Product) => {
        try {
            dispath(handleRemoveWishListItem(item))
            toast.show(`${item.title} has been removed from your wishlist`, {
                type: 'normal',
            })
        } catch (error) {
            toast.show(error, {
                type: 'danger',
            })
        }
    }
    return (
        <View className='flex flex-row justify-between items-center gap-6 mb-4 pb-4 border-b-2 border-gray'>
            <View className='bg-gray w-[90px] h-[90px] rounded-2xl border border-gray flex justify-center items-center'>
                <Image source={{ uri: item.thumbnail }} style={{ width: 90, height: 90 }} className='object-contain' />
            </View>
            <View className='text-left flex-1'>
                <Text className='font-JostSemiBold text-black text-listTitle leading-none'>{item.title}</Text>
                <Text className='font-InterMedium text-paragraph text-accent mt-1'>${item.price}</Text>
                <View className='mt-2'>
                    <TouchableHighlight onPress={() => handleRemoveWishList(item)} activeOpacity={0.2}
                        underlayColor="">
                        <Text className='font-icon text-red text-mediumTitle'>delete</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View>
                <TouchableHighlight activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => router.replace(`/product/${item.id}`)} className='bg-accent px-8 py-5 rounded-full'>
                    <Text className='font-InterSemiBold text-white text-listTitle capitalize leading-none text-center'>buy now</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}