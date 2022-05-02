import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const ItemName = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.name1}>Name very very long</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    justifyContent: "center",
  },
  name1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    alignSelf: "center"
  }
});

export default ItemName;
