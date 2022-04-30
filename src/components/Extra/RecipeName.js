import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function RecipeName(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text numberOfLines={1} style={styles.title}>
        Title
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 18
  }
});

export default RecipeName;
