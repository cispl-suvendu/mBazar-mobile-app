import CommonHeader from '@/components/header/commonHeader';
import BottomNav from '@/components/navigation/bottomNav';
import ProductHorizontalSlider from '@/components/slider/productHorizontalSlider';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addQuantity, clearCurrentProduct, clearProductsByCategory, fetchProductsByCat, fetchSingleProduct, handleAddToCart, handleAddToWishList, removeQuantity, setDefaultQuantity } from '@/store/slices/productSlice';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useToast } from "react-native-toast-notifications";

export default function SingleProduct() {
    const toast = useToast();
    const { id } = useLocalSearchParams();
    const productId = Array.isArray(id) ? id[0] : id;
    const dispatch = useAppDispatch()
    const { currentProduct, loading, productsByCategory, currentProductQuantity, wishListItem } = useAppSelector(state => state.products)
    useEffect(() => {
        dispatch(fetchSingleProduct({ id: productId }))
        return () => {
            dispatch(clearCurrentProduct())
            dispatch(setDefaultQuantity())
        }
    }, [productId])

    useEffect(() => {
        if (currentProduct?.category) {
            dispatch(fetchProductsByCat({ catName: currentProduct.category }));
        }

        return () => {
            dispatch(clearProductsByCategory());
        };
    }, [currentProduct?.category]);

    const [wishListActive, setWihListActive] = useState(true)
    useEffect(() => {
        const isAddToWishList = wishListItem.findIndex(item => item.id === currentProduct.id)
        if (isAddToWishList === -1) {
            setWihListActive(true)
        }
        else {
            setWihListActive(false)
        }
    }, [wishListItem.length])


    const addToCart = () => {
        try {
            dispatch(handleAddToCart())
            toast.show(`${currentProduct.title} has been added to your cart`, {
                type: 'success',
            })
        } catch (err: any) {
            toast.show(err.meaasge, {
                type: 'danger',
            })
        }
    }

    const addToWishList = () => {
        try {
            if (wishListActive) {
                dispatch(handleAddToWishList())
                toast.show(`${currentProduct.title} has been added to your wishlist`, {
                    type: 'warning',
                })
            } else {
                toast.show(`You have already added ${currentProduct.title} to your wishlist`, {
                    type: 'normal',
                })
            }

        } catch (err: any) {
            toast.show(err.meaasge, {
                type: 'danger',
            })
        }
    }

    return (
        <View className='bg-white flex-1'>
            <SafeAreaProvider>
                <SafeAreaView className='flex-1 flex-col bg-white'>
                    <View>
                        <CommonHeader title='' />
                    </View>
                    <ScrollView>
                        {loading ?
                            <Text>Loading...</Text>
                            : <View>
                                <View className='flex justify-center items-center'>
                                    {currentProduct.thumbnail !== '' && <Image source={{ uri: currentProduct?.thumbnail }} style={{ width: 260, height: 260 }} className='w-[260px] h-auto object-contain' resizeMode='contain' />}
                                </View>
                                <View className='py-6 px-4'>
                                    <View className='pr-16 relative'>
                                        <TouchableHighlight className='absolute right-4 top-1 w-12 h-12 rounded-full' activeOpacity={0.6}
                                            underlayColor="#DDDDDD"
                                            onPress={() => addToWishList()}>
                                            <View className='bg-white w-12 h-12 rounded-full shadow-[0_6px_20px_text-shadow] flex justify-center items-center'>
                                                <Text className={`font-icon text-bigTitle ${wishListActive ? 'text-black' : 'text-accent'}`}>favorite</Text>
                                            </View>
                                        </TouchableHighlight>
                                        <View className='inline-flex w-auto flex-row flex-grow-0'>
                                            <Text className='bg-accent text-white font-InterMedium text-smalTitle px-3 py-1 rounded-3xl inline-block'>{currentProduct?.discountPercentage}% off</Text>
                                        </View>
                                        <View className='mt-3 mb-2'>
                                            <Text className='font-InterSemiBold text-listTitle text-grayDark leading-none'>{currentProduct.brand}</Text>
                                        </View>
                                        <View>
                                            <Text className='font-JostSemiBold text-bigTitle text-black leading-snug'>{currentProduct.title}</Text>
                                        </View>
                                        <View className='mt-2'>
                                            <Text className='text-grayDark font-InterSemiBold text-smalTitle'>SKU: {currentProduct.sku}</Text>
                                        </View>
                                        <View className='py-4'>
                                            <Text className='font-InterLight text-paragraph text-graydark leading-normal'>{currentProduct.description}</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* dummy */}
                                <View>
                                    <ProductHorizontalSlider sectionTitle='similar products' sectionButtonLabel='See all' sectionButtonLink={`shop/${currentProduct.category}`} sliderData={productsByCategory} isLoading={loading} />
                                </View>
                            </View>}
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
            <View className='px-4 fixed left-2/4 bottom-6 w-full translate-x-[-50%] bg-white'>
                <View className='bg-white shadow-[4px_8px_10px_text-shadow] rounded-2xl p-4'>
                    <View className='flex flex-row justify-between items-center'>
                        <View>
                            <Text className='font-InterSemiBold text-grayDark text-smalTitle'>Total Price</Text>
                            <Text className='font-InterSemiBold text-accent text-listTitle'>${currentProduct.price}</Text>
                        </View>
                        <View className='bg-white rounded-full px-2 border border-gray'>
                            <View className='flex flex-row justify-between items-center'>
                                <TouchableHighlight className='p-2' activeOpacity={currentProductQuantity > 1 ? 0.2 : 1}
                                    underlayColor=""
                                    onPress={() => currentProductQuantity > 1 && dispatch(removeQuantity())}>
                                    <Text className='font-icon text-mediumTitle text-grayDark '>do_not_disturb_on</Text>
                                </TouchableHighlight>
                                <Text className='font-InterSemiBold text-grayDark text-mediumTitle'>{currentProductQuantity}</Text>
                                <TouchableHighlight className='p-2' activeOpacity={0.2}
                                    underlayColor=""
                                    onPress={() => dispatch(addQuantity())}>
                                    <Text className='font-icon text-mediumTitle text-grayDark '>add_circle</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View>
                            <TouchableHighlight activeOpacity={0.6}
                                underlayColor="#DDDDDD"
                                onPress={() => addToCart()} className='bg-accent px-8 py-5 rounded-full'>
                                <Text className='font-InterSemiBold text-white text-listTitle capitalize leading-none'>buy now</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
            <BottomNav />
        </View>
    )
}