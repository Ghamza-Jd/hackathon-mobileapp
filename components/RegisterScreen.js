import React, { useState } from "react";
import {
  ScrollView,
  Text,
  AsyncStorage,
  Platform,
  TextInput,
  Button
} from "react-native";

export default function Register({ navigation }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView>
      <Text>First Name:</Text>
      <TextInput onChangeText={t => setFirst(t)} />
      <Text>Last Name:</Text>
      <TextInput onChangeText={t => setLast(t)} />
      <Text>Username:</Text>
      <TextInput onChangeText={t => setUsername(t)} />
      <Text>Phone:</Text>
      <TextInput onChangeText={t => setPhone(t)} />
      <Text>Password:</Text>
      <TextInput onChangeText={t => setPassword(t)} />
      <Button
        title="Register"
        onPress={() =>
          submitForm(first, last, username, phone, password, navigation)
        }
      />
    </ScrollView>
  );
}
const submitForm = (f, l, u, ph, pa, n) => {
  fetch("https://areeba-hackathon.herokuapp.com/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      first: f,
      last: l,
      username: u,
      phone: ph,
      password: pa
    })
  });
  n.navigate("Login");
};
