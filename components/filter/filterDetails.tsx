import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { handleShowFilterModal, handleSetFiltervalue, fetchProducts, sortProdcutsBy, handleClearFiltervalue } from '@/store/slices/productSlice'

export default function FilterDetails() {
    const { showFilterModal, filterOptions } = useAppSelector(state => state.products)
    const dispath = useAppDispatch()
    useEffect(() => {
        if (filterOptions.sortyBy !== '' || filterOptions.sortOrder !== '') {
            dispath(fetchProducts({ sortBy: filterOptions.sortyBy, order: filterOptions.sortOrder }))
        }
    }, [filterOptions.sortyBy, filterOptions.sortOrder])

    function addActiveClass({sortByorder, sortBy}: { sortByorder: string, sortBy: string }) {
        if (sortBy === filterOptions.sortyBy && sortByorder === filterOptions.sortOrder) {
            return 'text-accent font-InterSemiBold text-paragraph opacity-100'
        }
        return null
    }

    return (
        <View>
            {showFilterModal && <View className='fixed top-0 left-0 w-full h-full bg-white z-50'>
                <View className='p-6 flex flex-col justify-between h-full'>
                    <View className='flex-row justify-end'>
                        <Pressable onPress={() => dispath(handleShowFilterModal(false))}>
                            <Text className='font-icon text-[32px] text-graydark'>disabled_by_default</Text>
                        </Pressable>
                    </View>
                    <View className='flex-1'>
                        <Text className='font-JostSemiBold text-xlTitle capitalize text-black'>Filter By</Text>
                        <View className='flex flex-col gap-4 mt-8'>
                            <Pressable onPress={() => dispath(handleSetFiltervalue({ sortBy: 'discountPercentage', sortByorder: 'desc' }))}>
                                <View className='flex flex-row gap-1 items-center opacity-50'>
                                    <Text className='font-icon text-accent text-listTitle'>task_alt</Text>
                                    <Text className={`font-InterSemiBold text-paragraph ${addActiveClass({sortBy: 'discountPercentage', sortByorder: 'desc' })}`}>Highest Discount First</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => dispath(handleSetFiltervalue({ sortBy: 'discountPercentage', sortByorder: 'asc' }))}>
                                <View className='flex flex-row gap-1 items-center opacity-50'>
                                    <Text className='font-icon text-accent text-listTitle'>task_alt</Text>
                                     <Text className={`font-InterSemiBold text-paragraph ${addActiveClass({sortBy: 'discountPercentage', sortByorder: 'asc' })}`}>Lowest Discount First</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => dispath(handleSetFiltervalue({ sortBy: 'price', sortByorder: 'desc' }))}>
                                <View className='flex flex-row gap-1 items-center opacity-50'>
                                    <Text className='font-icon text-accent text-listTitle'>task_alt</Text>
                                    <Text className={`font-InterSemiBold text-paragraph ${addActiveClass({sortBy: 'price', sortByorder: 'desc' })}`}>Highest Price First</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => dispath(handleSetFiltervalue({ sortBy: 'price', sortByorder: 'asc' }))}>
                                <View className='flex flex-row gap-1 items-center opacity-50'>
                                    <Text className='font-icon text-accent text-listTitle'>task_alt</Text>
                                    <Text  className={`font-InterSemiBold text-paragraph ${addActiveClass({sortBy: 'price', sortByorder: 'asc' })}`}>Lowest Price First</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View className='flex flex-row justify-between items-start mt-6'>
                        <Pressable onPress={() => dispath(handleClearFiltervalue())} className='bg-gray rounded-lg p-4'>
                            <Text className='font-InterSemiBold text-graydark text-center'>Clear Filter</Text>
                        </Pressable>
                        <Pressable onPress={() => dispath(handleShowFilterModal(false))} className='bg-accent rounded-lg p-4 w-1/2'>
                            <Text className='font-InterSemiBold text-white text-center'>Apply</Text>
                        </Pressable>
                    </View>
                </View>
            </View>}
        </View>

    )
}