import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function SpiceItems(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.items}>0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  items: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    flex: 1
  }
});

export default SpiceItems;
