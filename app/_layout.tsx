import { useColorScheme } from "@/hooks/useColorScheme.web";
import useAuthStore from "@/hooks/useStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isLoading, useFonts } from "expo-font";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import AuthProvider from "./context/auth";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Auth guard component
function AuthGuard() {
  const segments = useSegments();
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (isAuthenticated && !inAuthGroup) {
      console.log(segments[0], segments[1]);
      router.replace(`/${segments[0]}/${segments[1]}`);
    } else if (isAuthenticated && inAuthGroup) {
      router.replace("/");
    } else if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, segments, isLoading]);

  return <Slot />;
}

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const getTokenFromAsyncStorage = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      useAuthStore.setState({ isAuthenticated: true });
    } else {
      useAuthStore.setState({ isAuthenticated: false });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getTokenFromAsyncStorage();
  }, []);

  if (isLoading) {
    return null;
  }

  return <AuthGuard />;
}
