import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function RecipeTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.titleGoesHere1}>Title goes here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  titleGoesHere1: {
    fontSize: 12,
    color: "#000",
    alignSelf: "flex-start"
  }
});

export default RecipeTitle;
