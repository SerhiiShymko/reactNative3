import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/authScreens/LoginScreen";
import RegistrationScreen from "./Screens/authScreens/RegistrationScreen";
import ProfileScreen from "./Screens/navigateScreens/ProfileScreen";
import CreatePostsScreen from "./Screens/navigateScreens/CreatePostsScreen";
import Home from "./Screens/navigateScreens/Home";

const AuthStack = createNativeStackNavigator();
const NavigateStack = createBottomTabNavigator();

export default function useRoute(isAuth) {
  if (isAuth) {
    return (
      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShow: false }}>
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          initialParams={{ isAuth }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          initialParams={{ isAuth }}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <NavigateStack.Navigator
      initialRouteName="Home"
      tabBarOptions={{ showLabel: false }}
      activeColor="#FF6C00"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}>
      <NavigateStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="grid-outline"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
            />
          ),
          headerRight: () => (
            <Ionicons
              name="log-in-outline"
              size={30}
              color="#BDBDBD"
              style={{ marginRight: 10 }}
            />
          ),
          headerStyle: {
            borderBottomWidth: 1,
          },
          headerShown: false,
        }}
      />
      <NavigateStack.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="add-circle-sharp" size={30} color="#FF6C00" />
          ),
          headerTitle: "Створити публікацію",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
              style={{ marginLeft: 16 }}
            />
          ),
          headerStyle: {
            borderBottomWidth: 1,
          },
        }}
      />
      <NavigateStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="person-outline"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
            />
          ),
          tabBarShowLabel: false,
          headerStyle: {
            borderBottomWidth: 1,
          },
          headerTitle: "Профіль",
        }}
      />
    </NavigateStack.Navigator>
  );
}
