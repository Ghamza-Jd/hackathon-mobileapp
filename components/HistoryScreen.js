import React, { useState, useEffect } from "react";
import { ScrollView, Text, AsyncStorage, Platform } from "react-native";

export default function HomeScreen({ navigation }) {
  const [history, setHistory] = useState({});
  const [username, setUsername] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("username", (err, res) => {
      if (!err) setUsername(res);
    });
    fetch("https://areeba-hackathon.herokuapp.com/api/transactions/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username
      })
    })
      .then(res => res.json())
      .then(resJson => setHistory(resJson));
  });
  let hist = [];
  Object.keys(history).forEach(function(key) {
    console.log(key, history[key]);
    hist.push(<Text>history[key]</Text>);
  });
  return <ScrollView>{hist}</ScrollView>;
}
