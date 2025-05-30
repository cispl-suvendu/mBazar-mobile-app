import Loading from "@/components/skeleton/loading";
import UserInfo from "@/components/user/userInfo";
import { store } from "@/store/store";
import { Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";
import {
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  useFonts,
} from '@expo-google-fonts/jost';
import { MaterialSymbols_400Regular } from "@expo-google-fonts/material-symbols";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from "react-redux";
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    MaterialSymbols_400Regular
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <Provider store={store}>
        <ToastProvider offset={200} duration={2000} animationDuration={250} successColor="#2D8B56">
          <StatusBar />
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="shop/[id]"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="product/[id]"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="checkout"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="payment"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="+not-found" options={{
              headerShown: false,
            }} />
          </Stack>
        </ToastProvider>
        <UserInfo />
      </Provider>
    </>
  )
}
