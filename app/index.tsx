import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import ModalResult from "@/components/Modal";
import { styles } from "./index.styles";

export default function App() {
  const [alcohol, setAlcohol] = useState("0");
  const [gasoline, setGasoline] = useState("0");
  const [isVisibily, setIsVisibily] = useState(false);
  const [viable, setViable] = useState(0);

  const handleShow = () => {
    setIsVisibily(!isVisibily);
  };

  const handlePress = () => {
    const result = parseFloat(alcohol) / parseFloat(gasoline);

    if (isNaN(result)) {
      alert("Invalid input. Please enter a number.");
      return;
    }

    // viable < 0.7 ? alert("alcohol") : alert("gasoline");
    setViable(result);
    Keyboard.dismiss();
    handleShow();
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.imageHome}
        />
        <Text style={styles.titleHome}>Qual a melhor opção?</Text>
      </View>
      <View style={styles.viewBottom}>
        <Text style={styles.textBottom}>Álcool (preço por litro):</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={(a) => setAlcohol(a)}
        />

        <Text style={styles.textBottom}>Gasolina (preço por litro):</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={(g) => setGasoline(g)}
        />

        <TouchableOpacity style={styles.touch} onPress={handlePress}>
          <Text style={styles.textTouch}>Calcular</Text>
        </TouchableOpacity>
      </View>

      {isVisibily && (
        <ModalResult
          isViable={viable}
          show={handleShow}
          alcohol={alcohol}
          gasoline={gasoline}
        />
      )}
    </View>
  );
}
