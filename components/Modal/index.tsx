import { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./ModalResult.styles";

export default function ModalResult(props: any) {
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
          Álcool: R$ {parseFloat(props.alcohol).toFixed(2)}
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
