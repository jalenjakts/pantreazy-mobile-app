import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function RecIngredientsText(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.ingredients}>Ingredients</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  ingredients: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 278,
    fontSize: 16
  }
});

export default RecIngredientsText;
