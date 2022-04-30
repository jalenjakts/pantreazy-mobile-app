import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function ForgotPassBtn(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to ForgotPassword")}
        style={styles.button}
      >
        <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
  },
  forgotPassword: {
    color: "rgba(155,155,155,1)",
    fontSize: 12,
  },
  button: {
    top: 0,
    left: 0,
    width: "100%",
    height: 36,
    position: "absolute",
  },
});

export default ForgotPassBtn;
