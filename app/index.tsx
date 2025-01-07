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
    console.log(isVisibily);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030e09",
  },
  viewTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageHome: {
    width: 240,
    height: 240,
    borderRadius: 10,
  },
  titleHome: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 32,
    color: "#ffffff",
  },
  viewBottom: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: "flex-start",
  },
  textBottom: {
    color: "#ffffff",
    fontSize: 20,
  },
  textInput: {
    width: "100%",
    fontSize: 18,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: "#ffffff",
  },
  touch: {
    width: "100%",
    backgroundColor: "#00897b",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  textTouch: {
    color: "#ffffff",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
