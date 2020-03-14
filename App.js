import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import PaymentScreen from "./components/PaymentScreen";
import ScanPaymentScreen from "./components/ScanPaymentScreen";

const Stack = createStackNavigator();

export default function App() {
  const [outputText, setOutputText] = useState("Hello World!");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Areeba's Hackathon" }}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{ title: "Payment Screen" }}
        />
        <Stack.Screen
          name="ScanPaymentScreen"
          component={ScanPaymentScreen}
          options={{ title: "Scan QR" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
