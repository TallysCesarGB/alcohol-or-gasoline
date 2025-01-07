import { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

export default function ModalResult(props) {
  const gas = props.isViable < 0.7 ? "Álcool" : "Gasolina";

  return (
    <Modal animationType="slide">
      <View style={styles.modalContainer}>
        <Image
          style={styles.imageModal}
          source={require("../../assets/images/gas.png")}
        />
        <Text style={styles.modalText}>{gas} está mais viável</Text>

        <Text style={styles.prices}>Com os preços:</Text>
        <Text style={styles.priceAlcoholGasoline}>
          Alcool: R$ {parseFloat(props.alcohol).toFixed(2)}
        </Text>
        <Text style={styles.priceAlcoholGasoline}>
          Gasolina: R$ {parseFloat(props.gasoline).toFixed(2)}
        </Text>

        <TouchableOpacity style={styles.buttonCloseModal} onPress={props.show}>
          <Text style={styles.closeModalText}>Calcular novamente</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#030e09",
  },
  imageModal: {
    width: 200,
    height: 200,
    marginTop: 80,
    marginBottom: 32,
  },
  modalText: {
    fontSize: 32,
    color: "#23b80c",
    fontWeight: "bold",
  },
  prices: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  priceAlcoholGasoline: {
    marginTop: 10,
    fontSize: 16,
    color: "#fff",
  },
  buttonCloseModal: {
    marginTop: 64,
    height: 40,
    borderWidth: 4,
    borderColor: "#00897b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  closeModalText: {
    color: "#00897b",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 16,
  },
});
