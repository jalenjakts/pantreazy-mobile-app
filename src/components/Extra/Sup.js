import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Sup(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to SignupScreen")}
        style={styles.button}
      >
        <Text style={styles.signup}>Signup</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 107,
    height: 36
  },
  signup: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 25,
    textAlign: "center",
    flex: 1
  }
});

export default Sup;
