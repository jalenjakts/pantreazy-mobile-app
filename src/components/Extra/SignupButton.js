import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

function SignupButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TextInput placeholder="Signup" style={styles.textInput}></TextInput>
      <TouchableOpacity
        onPress={() => console.log("Navigate to SignupScreen")}
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
    color: "#3F51B5",
    fontSize: 14,
    fontFamily: "roboto-700",
    textAlign: "left",
    width: 152,
    height: 36
  },
  button: {
    top: 0,
    left: 0,
    width: 77,
    height: 36,
    position: "absolute"
  }
});

export default SignupButton;
