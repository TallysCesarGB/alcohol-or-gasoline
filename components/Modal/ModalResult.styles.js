import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
