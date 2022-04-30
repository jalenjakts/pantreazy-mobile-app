import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function CookSteps(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(230,230, 230,0.4)"
  }
});

export default CookSteps;
