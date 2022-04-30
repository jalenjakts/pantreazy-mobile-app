import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function ResetBtn(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
        onPress={() => console.log("Navigate to LoginScreen")}
        style={styles.button}
      >
        <Text style={styles.verifyEmail}>Verify Email</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: "rgba(0,159,37,1)",
    borderRadius: 30,
    flex: 1
  },
  verifyEmail: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 25,
    width: 106,
    marginTop: 9,
    marginLeft: 71
  }
});

export default ResetBtn;
