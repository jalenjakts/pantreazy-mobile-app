import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function RecCookStepsText(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.directions}>Directions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  directions: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    width: 150,
    height: 19
  }
});

export default RecCookStepsText;
