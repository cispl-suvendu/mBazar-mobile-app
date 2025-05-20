import { Heading } from '@/types';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function SectionHeading({ title, button_label, button_link, isWhite }: Heading) {
    const router = useRouter();

    return (
        <View className="px-4 flex-row items-center justify-between pb-2">
            <Text className={`font-JostSemiBold text-mediumTitle capitalize flex-1 ${isWhite ? 'text-white' : 'text-black'}`}>{title}</Text>
            <TouchableOpacity onPress={() => router.replace({pathname:button_link})}>
                <Text className={`font-InterMedium underline text-paragraph ${isWhite ? 'text-white' : 'text-black'}`}>{button_label}</Text>
            </TouchableOpacity>
        </View>
    )
}