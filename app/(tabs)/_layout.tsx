import { useAppSelector } from "@/store/hooks";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

type TabIconProps = {
  icon: string;
  focused: boolean;
};

const TabIcon = ({ icon, focused }: TabIconProps) => {
  const {cartItms} = useAppSelector(state => state.products)
  return (
    <View className="relative">
      {focused && <Text className="absolute -top-[17px] left-[50%] translate-x-[-50%] bg-accent h-[3px] w-[140%] block" />}
      {cartItms.length > 0 && icon === "shopping_basket" && (
         <Text className='bg-accent w-6 h-6 rounded-full text-white text-xsTitle text-center font-InterSemiBold absolute -right-3 -top-[3px] z-10 leading-[28px]]'>{cartItms.length ?? 0}</Text>
      )}
      <Text className={`${focused ? 'text-accent' : 'text-black'} material-symbols-outlined font-icon text-bigTitle`}>{icon}</Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: "#fff",
        borderTopWidth: 1,
        elevation: 0,
        paddingTop: 10,
        height: 60,
      },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="shop/shop"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="storefront" />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="favorite" />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="shopping_basket" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="search" />
          ),
        }}
      />
    </Tabs>
  );
}
