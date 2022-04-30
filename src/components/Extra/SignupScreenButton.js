import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function SignupScreenButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.signup}>Signup</Text>
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
  signup: {
    color: "rgba(155,155,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    width: 96,
    height: 30,
    textAlign: "center"
  },
  button: {
    top: 0,
    left: 0,
    width: 100,
    height: 40,
    position: "absolute"
  }
});

export default SignupScreenButton;
