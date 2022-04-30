import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function SignupScreen(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SignupScreen;
