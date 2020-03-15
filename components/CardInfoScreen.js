import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, Text } from "react-native";

export default function CardInfoScreen({ navigation }) {
  const [cardnb, setCardnb] = useState("");
  const [cardname, setCardName] = useState("");
  const [cardcvv, setCardcvv] = useState("");
  const [cardExMonth, setCardExMonth] = useState("");
  const [cardExYear, setCardExYear] = useState("");

  return (
    <ScrollView>
      <Text>Card Number: </Text>
      <TextInput onChangeText={text => setCardnb(text)} />
      <Text>Card Name: </Text>
      <TextInput onChangeText={text => setCardName(text)} />
      <Text>Card CVV: </Text>
      <TextInput onChangeText={text => setCardcvv(text)} />
      <Text>Card Expiry Month: </Text>
      <TextInput onChangeText={text => setCardExMonth(text)} />
      <Text>Card Expiry Year: </Text>
      <TextInput onChangeText={text => setCardExYear(text)} />
      <Button
        onPress={() =>
          setCardInfo(cardnb, cardname, cardcvv, cardExMonth, cardExYear)
        }
      />
    </ScrollView>
  );
}

const setCardInfo = (nb, name, cvv, month, year) => {};
