import React, { useState, useEffect } from "react";
import { ScrollView, Text, AsyncStorage, Platform } from "react-native";

export default function HomeScreen({ navigation }) {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("username", (err, res) => {
      if (err) return;
    });
  });
  return (
    <ScrollView>
      <Text></Text>
    </ScrollView>
  );
}
