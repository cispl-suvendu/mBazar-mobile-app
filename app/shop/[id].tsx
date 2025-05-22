import CommonHeader from '@/components/header/commonHeader';
import BottomNav from '@/components/navigation/bottomNav';
import ProductCard from '@/components/product/product';
import ProductSkeleton from '@/components/skeleton/skeletonProduct';
import { dummyProduct } from '@/constants/dummyData';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearProductsByCategory, fetchProductsByCat } from '@/store/slices/productSlice';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function SignleCategory() {
    const [catName, setCatName] = useState<string | undefined>()
    const { id } = useLocalSearchParams();
    const catSlug = Array.isArray(id) ? id[0] : id;
    const dispatch = useAppDispatch()
    const { productsByCategory, loading } = useAppSelector(state => state.products)
    const { allCategory, loading: isLoading } = useAppSelector(state => state.category)
    useEffect(() => {
        if (catSlug) {
            dispatch(fetchProductsByCat({ catName: catSlug }));
            const getCatName = allCategory.find(cat => cat.slug === catSlug)
            setCatName(getCatName?.name)
        }
        return () => {
            dispatch(clearProductsByCategory());
            setCatName(undefined)
        }
    }, [id]);

    const renderFooter = () => {
        if (loading && productsByCategory.length > 0) {
            return (
                <View style={{ paddingVertical: 20, alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#000" />
                    <Text>Loading...</Text>
                </View>
            )
        }
        return null
    }

    const renderHeader = () => {
        return (
            <>
                <View className='flex-row justify-between items-start px-6'>
                    <Text className='font-JostSemiBold text-mediumTitle capitalize flex-1 text-black'>{catName}</Text>
                    <Text className='font-InterSemiBold text-paragraph text-graydark'>{productsByCategory?.length}</Text>
                </View>
            </>
        )
    }

    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                    <StatusBar translucent backgroundColor="transparent" />
                    <CommonHeader title={catName} />
                    {loading ? <FlatList
                        data={dummyProduct}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <ProductSkeleton />}
                        numColumns={2}
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
                    /> : <FlatList
                        data={productsByCategory}
                        keyExtractor={(item) => item.title.toString()}
                        renderItem={({ item }) => <ProductCard item={item} />}
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
                    />}
                </SafeAreaView>
            </SafeAreaProvider>
            <BottomNav />
        </>

    )
}
