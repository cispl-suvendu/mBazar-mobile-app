import CartScreen from '@/app/(tabs)/cart'
import HomeScreen from '@/app/(tabs)/index'
import SearchScreen from '@/app/(tabs)/search'
import StoreScreen from '@/app/(tabs)/shop/shop'
import WishlistScreen from '@/app/(tabs)/wishlist'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'


type TabIconProps = {
    icon: string;
    focused: boolean;
};


const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()

const TabIcon = ({ icon, focused }: TabIconProps) => {
    return (
        <View className="relative">
            {focused && <Text className="absolute -top-[17px] left-[50%] translate-x-[-50%] bg-accent h-[3px] w-[140%] block" />}
            <Text className={`${focused ? 'text-accent' : 'text-black'} material-symbols-outlined font-icon text-bigTitle`}>{icon}</Text>
        </View>
    );
};

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    )
}

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: "#fff",
                borderTopWidth: 1,
                elevation: 0,
                paddingTop: 10,
                height: 60,
            },
        }}>
            <Tab.Screen
                name="HomeTab"
                component={HomeStackScreen}
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon="home" />
                    ),
                }}
            />
            <Tab.Screen
                name="StoreScreen"
                component={StoreScreen}
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon="storefront" />
                    ),
                }}
            />
            <Tab.Screen
                name="WishlistScreen"
                component={WishlistScreen}
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon="favorite" />
                    ),
                }}
            />
            <Tab.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon="shopping_basket" />
                    ),
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon="search" />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}