import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import PaymentScreen from "./components/PaymentScreen";
import ScanPaymentScreen from "./components/ScanPaymentScreen";
import LoginScreen from "./components/LoginScreen";
import CardInfoScreen from "./components/CardInfoScreen";

const Stack = createStackNavigator();

export default function App() {
  console.disableYellowBox = true;
  const [outputText, setOutputText] = useState("Hello World!");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Areeba's Hackathon" }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ title: "Payment Screen" }}
        />
        <Stack.Screen
          name="ScanPayment"
          component={ScanPaymentScreen}
          options={{ title: "Scan QR" }}
        />
        <Stack.Screen
          name="CardInfo"
          component={CardInfoScreen}
          options={{ title: "Card Info" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
