import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function RecLookupTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.titleStyle1}>Title goes here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  titleStyle1: {
    fontSize: 12,
    color: "#000",
    paddingBottom: 0
  }
});

export default RecLookupTitle;
