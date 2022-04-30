import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function RecItemName(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.itemName}>Item Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  itemName: {
    fontFamily: "roboto-700italic",
    color: "#121212",
    height: 25,
    fontSize: 20
  }
});

export default RecItemName;
