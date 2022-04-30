import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

function LoginButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TextInput
        placeholder="Login"
        placeholderTextColor="rgba(255,255,255,1)"
        style={styles.textInput}
      ></TextInput>
      <TouchableOpacity
        onPress={() => console.log("Navigate to HomeScreen")}
        style={styles.button}
      ></TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,159,37,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  textInput: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "roboto-regular",
    width: 55,
    height: 36,
    textAlign: "center"
  },
  button: {
    top: 0,
    left: 0,
    width: 276,
    height: 43,
    position: "absolute",
    borderRadius: 30
  }
});

export default LoginButton;
