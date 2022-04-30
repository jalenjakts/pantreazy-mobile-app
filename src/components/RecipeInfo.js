import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function RecipeInfo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.subtitleStyle1}>Subtitle here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  subtitleStyle1: {
    fontSize: 6,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  }
});

export default RecipeInfo;
