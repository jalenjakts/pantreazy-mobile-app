import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ItemAmount(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.loremIpsum}>1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 22 
  }
});

export default ItemAmount;
