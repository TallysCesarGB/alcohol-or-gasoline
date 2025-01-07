import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
