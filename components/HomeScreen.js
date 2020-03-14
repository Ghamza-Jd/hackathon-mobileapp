import React from "react";
import { View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Create a Payment"
        onPress={() => navigation.navigate("PaymentScreen")}
      />
      <Button
        title="Make a Payment"
        onPress={() => navigation.navigate("ScanPaymentScreen")}
      />
    </View>
  );
}
