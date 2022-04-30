import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Menu(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="backspace" style={styles.leftIcon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 11,
    justifyContent: "flex-start"
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    alignSelf: "stretch"
  }
});

export default Menu;
