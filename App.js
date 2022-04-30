import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "@use-expo/font";
import ScanScreen from "./src/screens/TestScreens/ScanScreen";
import LoginScreen from "./src/screens/MyScreens/LoginScreen";
import SignupScreen from "./src/screens/MyScreens/SignupScreen";
import ProfileScreen from "./src/screens/MyScreens/ProfileScreen";
import HomeScreen from "./src/screens/MyScreens/HomeScreen"
import ForgotPassScreen from "./src/screens/MyScreens/ForgotPassScreen";
import ScanDetailScreen from "./src/screens/TestScreens/ScanDetailScreen";
import ResolveAuthScreen from "./src/screens/resolveAuthScreen";
import { Provider as AuthProvider } from "./src/context/authContext";
import { Provider as MainProvider } from "./src/context/mainContext";
import { navigationRef } from "./src/RootNavigation";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();
const ScanStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const MainFlow = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Barcode" component={ScanScreen} />
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

const AuthFlow = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen name="Forgot" component={ForgotPassScreen} />
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

  useFonts(customFonts)
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <MainProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="AuthFlow"
              component={AuthFlow}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainFlow"
              component={MainFlow}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScanDetail"
              component={ScanDetailScreen}
            />
          </Stack.Navigator>
        </MainProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="BottomNav"
//           component={BottomNav}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// function BottomNav() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Home") {
//             iconName = focused ? "ios-home" : "ios-home-outline";
//           } else if (route.name === "Scan") {
//             iconName = focused ? "ios-barcode" : "ios-barcode-outline";
//           } else if (route.name === "Login") {
//             iconName = focused ? "ios-home" : "ios-home";
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "green",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="Scan"
//         component={ScanScreen}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{ headerShown: false }}
//       />
//     </Tab.Navigator>
//   );
// }