import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  AsyncStorage
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text>Username: </Text>
      <TextInput
        placeholder="Awesome Username"
        onChangeText={user => setUsername(user)}
      />
      <Text>Password: </Text>
      <TextInput
        textContentType="password"
        secureTextEntry={true}
        placeholder="Unhackable Password"
        onChangeText={pass => setPassword(pass)}
      />
      <Button
        style={styles.button}
        title="Login"
        onPress={() => submit(navigation, username, password)}
      />
    </View>
  );
}

const submit = (navigation, username, password) => {
  fetch("https://areeba-hackathon.herokuapp.com/api/areeba", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
    .then(res => res.json())
    .then(resJson => {
      if (resJson.err) {
        alert(resJson.msg);
        return;
      }
      AsyncStorage.setItem("token", resJson.access_token);
      AsyncStorage.setItem("type", resJson.token_type);
    })
    .catch(err => {
      if (err) throw err;
    });
  navigation.navigate("Home");
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    justifyContent: "flex-start"
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "black"
  },
  text: {
    paddingTop: 20
  },
  button: {
    flexDirection: "row"
  }
});
