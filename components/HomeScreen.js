import React from "react";
import { View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
    </View>
  );
}
