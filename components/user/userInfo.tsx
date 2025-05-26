import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getSavedCartItems, getSavedWishListItems } from '@/store/slices/productSlice';
import { setUserName, setUserSavedName } from '@/store/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function UserInfo() {
    const dispatch = useAppDispatch();
    const { name, savedName } = useAppSelector(state => state.user);
    const { wishListItem, cartItms } = useAppSelector(state => state.products)
    const [hasCheckedStorage, setHasCheckedStorage] = useState(false);
    const [isSubmited, setIsSubmited] = useState(true)

    const storeUserName = async () => {
        try {
            await AsyncStorage.setItem('YName', name);
            setIsSubmited(false)
        } catch (e) {
            console.log(e);
        }
    };

    const getUserName = async () => {
        try {
            const value = await AsyncStorage.getItem('YName');
            if (value !== null) {
                dispatch(setUserSavedName(value));
            }
        } catch (e) {
            console.log(e);
        } finally {
            setHasCheckedStorage(true);
        }
    };

    const addSavedItem = async () => {
        try {
            const jsonCartValue = JSON.stringify(cartItms);
            await AsyncStorage.setItem('userCart', jsonCartValue);
            const jsonWishlistValue = JSON.stringify(wishListItem);
            await AsyncStorage.setItem('userWishList', jsonWishlistValue);
        } catch (e) {
            console.log(`Error saving data: ${e}`);
        }
    }

    const getSavedData = async () => {
        try {
            const jsonCartValue = await AsyncStorage.getItem('userCart');
            const finalCartValue = jsonCartValue != null ? JSON.parse(jsonCartValue) : null;
            if (finalCartValue) {
                dispatch(getSavedCartItems(finalCartValue));
            }
            const jsonWishListValue = await AsyncStorage.getItem('userWishList');
            const finalWishListValue = jsonWishListValue != null ? JSON.parse(jsonWishListValue) : null;
            if (finalWishListValue) {
                dispatch(getSavedWishListItems(finalWishListValue));
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getUserName();
        getSavedData();
    }, []);

    useEffect(() => {
        addSavedItem();
    },[wishListItem.length, cartItms.length])

    const maxLength = 8;


    if (hasCheckedStorage && !savedName && !isSubmited) return (
        <>
            <View className="absolute bg-black h-full w-full z-10 opacity-85" />
            <View className="absolute z-20 bg-white p-8 py-10 w-full bottom-0 shadow-[0_-8px_20px_text-shadow] rounded-tr-[30px] rounded-tl-[30px]">
                <Text className="text-black font-JostSemiBold text-bigTitle m-0 leading-none capitalize">Welcome to mbazar</Text>
                <Text className="text-graydark font-InterSemiBold text-paragraph font-semibold my-1">Please enter your name</Text>
                <TextInput
                    value={name}
                    onChangeText={(text) => dispatch(setUserName(text))}
                    placeholder="john deo"
                    className="w-full border border-gray px-4 rounded-full bg-white text-listTitle font-InterSemiBold text-black mt-2 mb-6"
                    maxLength={maxLength}
                />
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={storeUserName}
                    className='bg-accent px-8 py-5 rounded-full'
                >
                    <Text className='font-InterSemiBold text-white text-listTitle capitalize leading-none text-center'>Get Started</Text>
                </TouchableHighlight>
            </View>
        </>
    );

    return null;
}
