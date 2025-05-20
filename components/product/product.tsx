import { Product } from '@/types'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'

export default function ProductCard({ item }: { item: Product }) {
  const router = useRouter()
  return (
    <View className='w-[168px]'>
      <View className="rounded-2xl overflow-hidden bg-white shadow-[0_6px_20px_text-shadow] mr-4 ">
        <View className='bg-gray flex items-center justify-center h-[124px] w-full'>
        <Image
            source={{ uri: item.thumbnail }}
            className="w-full h-[124px] object-cover" style={{ width: 124, height: 124 }} /> 
        </View>
        <View className='p-4'>
          <Text className='font-JostSemiBold text-paragraph leading-[18px] text-black min-h-10'>{item.title}</Text>
          <View className='flex-row justify-between items-center py-3'>
            <View>
              <Text className='font-InterSemiBold text-smalTitle text-graydark leading-none mb-2'>Price</Text>
              <Text className='font-InterSemiBold text-listTitle text-accent leading-none'>${item.price}</Text>
            </View>
            <TouchableHighlight activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => router.replace(`/product/${item.id}`)} className='w-[34px] h-[34px] bg-accent rounded-full flex items-center justify-center shadow-[2px_3px_20px_accent]'>
              <Text className='font-icon  text-listTitle text-white'>add</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  )
}