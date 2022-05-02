import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const ItemName = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.name1}>Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    justifyContent: "center",
    //width: 108,
    //height: "100%"
  },
  name1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    alignSelf: "center",
    //height: "100%"
  }
});

export default ItemName;
