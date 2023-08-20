import { createStackNavigator } from "@react-navigation/stack";
import useRoute from "./router";

const Stack = createStackNavigator();

export default function RoutingNavigation() {
  const isUserAuthenticated = false;

  const routing = useRoute(isUserAuthenticated);

  return (
    <Stack.Navigator
      initialRouteName={isUserAuthenticated ? "Home" : "LoginScreen"}
      screenOptions={{ headerShown: false }}>
      {routing}
    </Stack.Navigator>
  );
}
