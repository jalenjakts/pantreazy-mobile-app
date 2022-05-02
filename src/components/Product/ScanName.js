import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ScanName(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.scanTheBarcode1}>Ghost Energy: Orange Cream</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  scanTheBarcode1: {
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 30,
    flex: 1
  }
});

export default ScanName;
