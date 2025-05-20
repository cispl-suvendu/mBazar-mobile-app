import CategoryCard from '@/components/category/categoryCard'
import CommonHeader from '@/components/header/commonHeader'
import ProductCard from '@/components/product/product'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchProducts } from '@/store/slices/productSlice'
import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function Store() {

    const dispatch = useAppDispatch()
    const { allProducts, pagination, loading, hasMore } = useAppSelector(state => state.products)
    const { allCategory, loading: isCatLoading } = useAppSelector(state => state.category)
    const handleFetchProducts = () => {
        if (loading || !hasMore) return;
        dispatch(fetchProducts({ skip: pagination.skip + 1, limit: pagination.limit + 1 }))
    }
    useEffect(() => {
        handleFetchProducts()
    }, [])

    const renderFooter = () => {
        if (loading && allProducts.length > 0) {
            return (
                <View style={{ paddingVertical: 20, alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#000" />
                    <Text>Loading...</Text>
                </View>
            )
        } else if (!hasMore) {
            return (
                <View style={{ paddingVertical: 20, alignItems: 'center' }}>
                    <Text>End of List</Text>
                </View>
            )
        }
        return null
    }

    const renderHeader = () => {
        return (
            <>
                <View className='flex-row justify-between items-start px-6'>
                    <Text className='font-JostSemiBold text-mediumTitle capitalize flex-1 text-black'>All Products</Text>
                    <Text className='font-InterSemiBold text-paragraph text-graydark'>{allProducts.length}</Text>
                </View>
            </>
        )
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <CommonHeader title='Shop' />
                <View className='pt-6 px-4 bg-white'>
                    {isCatLoading ? <Text>Loading...</Text> : <FlatList showsHorizontalScrollIndicator={false} className="px-4 pt-2 pb-6" horizontal={true} data={allCategory} keyExtractor={item => item.slug} renderItem={({ item }) => (
                        <CategoryCard item={item} categoryPageItem={true} />
                    )} />}
                </View>
                <FlatList
                    data={allProducts}
                    keyExtractor={(item) => item.title.toString()}
                    renderItem={({ item }) => <ProductCard item={item} />}
                    onEndReached={handleFetchProducts}
                    onEndReachedThreshold={1}
                    numColumns={2}
                    ListEmptyComponent={() => (
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            <Text>No Products Found</Text>
                        </View>
                    )}
                    ListHeaderComponent={renderHeader}
                    ListFooterComponent={renderFooter}
                    contentContainerStyle={{
                        paddingTop: 20,
                        paddingBottom: 300,
                        gap: 25,
                        justifyContent: 'center',
                    }}
                    columnWrapperStyle={{
                        justifyContent: 'center',
                        paddingHorizontal: 25,
                    }}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}