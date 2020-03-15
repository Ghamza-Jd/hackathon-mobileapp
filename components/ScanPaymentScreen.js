import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, AsyncStorage } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function ScanPaymentScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    AsyncStorage.getItem("username", (err, res) => {
      if (!err) setUsername(res);
    });
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    const parsedData = data.split("_");
    fetch("https://areeba-hackathon.herokuapp.com/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        buyer: username,
        seller: parsedData[0],
        price: parsedData[1]
      })
    })
      .then(res => res.json())
      .then(resJson => console.log(resJson))
      .catch(err => {
        if (err) throw err;
      });
    console.log("Not here");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end"
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
