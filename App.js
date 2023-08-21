import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./Screens/authScreens/LoginScreen";
import RegistrationScreen from "./Screens/authScreens/RegistrationScreen";
import Home from "./Screens/navigateScreens/Home";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    // RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    // RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [!fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  // const routing = useRoute(isAuth);
  // const RoutingComponent = useRoute(isAuth);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShow: false }}>
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
          />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
      </NavigationContainer>

      <StatusBar style={"auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
