import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createStackNavigator();
const NavigateStack = createBottomTabNavigator();

export default function useRoute(isAuth) {
  if (isAuth) {
    return (
      <AuthStack.Navigate
        initialRouteName="Login"
        screenOption={{ headerShow: false }}>
        <AuthStack.Screen
          name="Registration"
          component={() => (
            <RegistrationScreen isAuth={isAuth} />
          )}></AuthStack.Screen>
        <AuthStack.Screen
          name="Registration"
          component={() => <LoginScreen isAuth={isAuth} />}></AuthStack.Screen>
      </AuthStack.Navigate>
    );
  }

  return (
    <NavigateStack.Navigator
      initialRouteName="Name"
      tabBarOptions={{ showLabel: false }}
      activeColor="#FF6C00"
      screenOptions={{
        tarBarStyle: {
          height: 83,
          paddingHorizontal: 81,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 17,
          fontFamily: "Roboto-Medium",
          lineHeight: 22,
          color: "#212121",
        },
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
