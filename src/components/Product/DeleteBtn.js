import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function DeleteBtn(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.loremIpsum}>Delete</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    alignSelf: "center"
  }
});

export default DeleteBtn;
