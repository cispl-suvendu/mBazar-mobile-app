import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { clearSearchResult, clearSetSearchQ, searchProducts, setSearchQ } from '@/store/slices/productSlice'
import { Product } from '@/types'
import { useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Search() {
    const dispath = useAppDispatch()
    const router = useRouter()
    const { searchResult, searchQ, searchResultLoading } = useAppSelector(state => state.products)

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQ) {
                dispath(searchProducts({ searchQ }))
            } else {
                dispath(clearSearchResult())
            }
        }, 500);
        return () => {
            clearTimeout(delayDebounceFn)
        };
    }, [searchQ])

    const handlleRouteChange = (product: Product) => {
        router.replace(`/product/${product.id}`)
        dispath(clearSetSearchQ())
        dispath(clearSearchResult())
    }

    return (
        <View className="relative z-10">
            <Text className="font-icon absolute right-4 z-10 text-accent text-[26px] top-2/4 -translate-y-2/4">search</Text>
            <TextInput value={searchQ} onChangeText={(newTerms) => dispath(setSearchQ(newTerms))} placeholder="Search our store" className="placeholder:text-graydark bg-white rounded-xl p-4 h-14 font-InterSemiBold text-listTitle shadow-[2_2_26_0_text-accentDark]" autoComplete="off" autoCorrect={false} spellCheck={false} />
            {searchQ &&
                <>
                    <View className='absolute left-0 top-[100%] bg-white p-6 w-full rounded-2xl shadow-[0_0_10_text-accentDark] h-[300px]'>
                        <ScrollView>
                            {searchResultLoading ? (
                                <Text>Loading...</Text>
                            ) : searchResult.length > 0 ? (
                                searchResult.map((product, index) => (
                                    <TouchableOpacity key={index} onPress={() => handlleRouteChange(product)}>
                                        <View className='flex flex-row justify-start items-center gap-4 mb-2 pb-2 border-b border-shadow'>
                                            <View className='border border-gray'>
                                                <Image
                                                    source={{ uri: product.thumbnail }}
                                                    style={{ width: 50, height: 50 }}
                                                    resizeMode='contain'
                                                />
                                            </View>
                                            <View>
                                                <Text className='font-JostSemiBold text-paragraph leading-none text-black'>
                                                    {product.title}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))
                            ) : (
                                <Text>No item found!</Text>
                            )}
                        </ScrollView>
                    </View>
                </>}
        </View>
    )
}