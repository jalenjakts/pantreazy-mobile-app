import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

function LoginScreenButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TextInput
        placeholder="Login"
        selectionColor="rgba(0,0,0,1)"
        placeholderTextColor="rgba(155,155,155,1)"
        style={styles.textInput}
      ></TextInput>
      <TouchableOpacity
        onPress={() => console.log("Navigate to LoginScreen")}
        style={styles.button}
      ></TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  textInput: {
    color: "rgba(74,74,74,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    width: 104,
    height: 38,
    textAlign: "center",
    backgroundColor: "#fff"
  },
  button: {
    top: -1,
    left: -5,
    width: 104,
    height: 38,
    position: "absolute"
  }
});

export default LoginScreenButton;
