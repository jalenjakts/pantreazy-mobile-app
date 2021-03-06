// React Imports
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
// Authorizations Screens
import LoginScreen from "./src/screens/MyScreens/LoginScreen";
import SignupScreen from "./src/screens/MyScreens/SignupScreen";
import ForgotPassword from "./src/screens/MyScreens/ForgotPassword";
import ResolveAuthScreen from "./src/screens/resolveAuthScreen";

// Home Drawer Route Screens
import HomeScreen from "./src/screens/MyScreens/HomeScreen"
import ProfileScreen from "./src/screens/MyScreens/ProfileScreen";
import ScanScreen from "./src/screens/MyScreens/ScanScreen";
import Scanner from "./src/screens/MyScreens/Scanner";
import ScannedScreen from "./src/screens/MyScreens/ScannedScreen";
import FavScreen from "./src/screens/MyScreens/FavScreen";
import SearchRecipeScreen from "./src/screens/MyScreens/SearchRecipeScreen";
import RecipeScreen from "./src/screens/MyScreens/RecipeScreen";
import HelpScreen from "./src/screens/MyScreens/HelpScreen";


// Custom Routes and Providers
import { Provider as AuthProvider } from "./src/context/authContext";
import { Provider as MainProvider } from "./src/context/mainContext";
import { navigationRef } from "./src/RootNavigation";

const AuthStack = createNativeStackNavigator();
const MainDrawer = createDrawerNavigator();
const AppStack = createNativeStackNavigator();

const MainDrawerFlow = () => {
  return (
    <MainDrawer.Navigator
      useLegacyImplementation={true}
      nitialRouteName="Home"
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Barcode") {
            iconName = focused ? "barcode" : "barcode-outline";
          } else if (route.name === "Recipes") {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "settings" : "settings-outline";
          } else {
            iconName = focused ? "alert" : "alert-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        drawerActiveTintColor: "rgba(0,159,37,1)",
        drawerActiveBackgroundColor: "rgba(228,243,212,1)",
      })}>
      <MainDrawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <MainDrawer.Screen name="Barcode" component={Scanner} options={{ headerShown: false }} />
      <MainDrawer.Screen name="Recipes" component={SearchRecipeScreen} options={{ headerShown: false }} />
      <MainDrawer.Screen name="Favorites" component={FavScreen} options={{ headerShown: false }} />
      <MainDrawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, }} />
    </MainDrawer.Navigator>
  )
};

const AuthFlow = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen name="Forgot" component={ForgotPassword} options={{ headerShown: false }} />
      <AuthStack.Screen name="ResolveAuth" component={ResolveAuthScreen} />
    </AuthStack.Navigator>
  );
};

export default function App() {
  const customFonts = {
    "beau-rivage-regular": require("./assets/fonts/beau-rivage-regular.ttf"),
    "roboto-700": require("./assets/fonts/roboto-700.ttf"),
    "roboto-regular": require('./assets/fonts/roboto-regular.ttf')
  }

  let [fontsLoaded] = useFonts({
    "beau-rivage-regular": require("./assets/fonts/beau-rivage-regular.ttf"),
    "roboto-700": require("./assets/fonts/roboto-700.ttf"),
    "roboto-regular": require('./assets/fonts/roboto-regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <MainProvider>
          <AppStack.Navigator>
            <AppStack.Screen
              name="AuthFlow"
              component={AuthFlow}
              options={{ headerShown: false }}
            />
            <AppStack.Screen
              name="MainFlow"
              component={MainDrawerFlow}
              options={{ headerShown: false }}
            />
            <AppStack.Screen
              name="ScanDetail"
              component={ScannedScreen}
              options={{ headerShown: false }}
            />
            <AppStack.Screen
              name="Help"
              component={HelpScreen}
              options={{ headerShown: false }}
            />
            <AppStack.Screen
              name="Recipe"
              component={RecipeScreen}
              options={{ headerShown: false }}
            />
          </AppStack.Navigator>
        </MainProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}