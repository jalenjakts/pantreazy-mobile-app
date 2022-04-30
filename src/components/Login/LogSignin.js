import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function LogSignin(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.login}>Login</Text>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
        onPress={() => console.log("Navigate to HomeScreen")}
        style={styles.button}
      ></TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
    paddingRight: 16,
    backgroundColor: "rgba(0,159,37,1)"
  },
  login: {
    color: "#fff",
    fontSize: 20
  },
  button: {
    top: 0,
    left: 0,
    width: 283,
    position: "absolute",
    bottom: 0
  }
});

export default LogSignin;
