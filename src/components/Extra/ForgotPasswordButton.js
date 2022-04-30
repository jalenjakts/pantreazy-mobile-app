import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ForgotPasswordButton = (props) => {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text
        style={styles.textInput}
      >FORGOT PASSWORD</Text>
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
    fontSize: 10,
    width: 97,
    height: 17
  }
});

export default ForgotPasswordButton;
