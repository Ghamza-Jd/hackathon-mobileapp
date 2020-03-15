import React from "react";
import { View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Create a Payment"
        onPress={() => navigation.navigate("Payment")}
      />
      <Button
        title="Make a Payment"
        onPress={() => navigation.navigate("ScanPayment")}
      />
      <Button
        title="Card Info"
        onPress={() => navigation.navigate("CardInfo")}
      />
    </View>
  );
}
