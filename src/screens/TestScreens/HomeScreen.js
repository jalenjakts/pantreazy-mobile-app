import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.textStyle}> Welcome to PanTreazy! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#aaccaa",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#f0f8ff",
  },
  textStyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
