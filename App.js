import { NavigationContainer } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import useRoute from "./router";

export default function App(isAuth) {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [!fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const routing = useRoute(isAuth);
  // const RoutingComponent = useRoute(isAuth);

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <NavigationContainer>{routing}</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
