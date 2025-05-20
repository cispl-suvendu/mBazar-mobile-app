import { Tabs } from "expo-router";
import { Text, View } from "react-native";

type TabIconProps = {
  icon: string;
  focused: boolean;
};

const TabIcon = ({ icon, focused }: TabIconProps) => {
  return (
    <View className="relative">
      {focused && <Text className="absolute -top-[17px] left-[50%] translate-x-[-50%] bg-accent h-[3px] w-[140%] block" />}
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
        name="store/store"
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
      <Tabs.Screen
        name="store/[id]"
        options={{
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tabs>
  );
}
