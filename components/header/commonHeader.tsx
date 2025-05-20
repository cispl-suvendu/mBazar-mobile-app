import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCurrentLink, setPreviousLink } from '@/store/slices/linkSlice';
import { CommonHeaderProps } from '@/types';
import { usePathname, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';


export default function CommonHeader({ title }: CommonHeaderProps) {
    const {cartItms} = useAppSelector(state => state.products)
    const router = useRouter()
    const pathname = usePathname()
    const dispath = useAppDispatch()
    const { prevLink } = useAppSelector(state => state.linkList)
    useEffect(() => {
        dispath(setPreviousLink())
        dispath(setCurrentLink(pathname))
    }, [pathname])

    return (
        <View className='flex-row justify-between items-center py-6 p-4 pl-2 bg-white border-b-2 border-gray'>
            <View className='flex-row items-center gap-2'>
                <Pressable onPress={() => router.replace({ pathname: prevLink as string as any })} className='px-2'>
                    <Text className='font-icon text-accent text-[26px]'>arrow_back_ios</Text>
                </Pressable>
                <Text className='font-JostSemiBold text-bigTitle text-black'>{title}</Text>
            </View>
            <View className='flex-row items-center gap-6 pr-3'>
                <Pressable onPress={() => router.replace('/search')}>
                    <Text className='font-icon text-[26px] text-black'>search</Text>
                </Pressable>
                <Pressable onPress={() => router.replace('/cart')}>
                    <View className='relative'>
                        <Text className='bg-accent w-6 h-6 rounded-full text-white text-xsTitle text-center font-InterSemiBold absolute -right-3 -top-[3px] z-10 leading-[28px]]'>{cartItms.length ?? 0}</Text>
                        <Text className='font-icon text-[26px] text-black'>shopping_basket</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}