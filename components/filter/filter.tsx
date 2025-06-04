import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { handleShowFilterModal } from '@/store/slices/productSlice'

export default function Filter() {
    const dispath = useAppDispatch()
    const { filterOptions } = useAppSelector(state => state.products)
    return (
        <View className='flex flex-row items-center gap-2'>
            {filterOptions.sortyBy && filterOptions.sortOrder ? (<View className='flex flex-row gap-2'>
                <Text className='bg-gray px-4 text-xsTitle font-InterSemiBold rounded-2xl capitalize'>{filterOptions.sortyBy === "discountPercentage" ? 'Discount' : filterOptions.sortyBy}</Text>
                <Text className='bg-gray px-4 text-xsTitle font-InterSemiBold rounded-2xl capitalize'>{filterOptions.sortOrder === "desc" ? 'High' : 'Low'}</Text>
            </View>) : null}
            <Pressable className='border border-graydark px-1 py-1 flex flex-row items-center justify-center rounded-3xl w-16' onPress={() => dispath(handleShowFilterModal(true))}>
                <Text className='font-icon text-graydark text-[20px]'>tune</Text>
            </Pressable>
        </View>
    )
}