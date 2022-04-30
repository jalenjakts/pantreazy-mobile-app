import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MeatItems(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text}>0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  }
});

export default MeatItems;
