import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function ItemAdd(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.iconStack}>
        <Icon name="plus-circle" style={styles.icon}></Icon>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2
  },
  icon: {
    top: 1,
    left: 3,
    position: "absolute",
    color: "rgba(0,159,37,1)",
    fontSize: 30
  },
  button: {
    top: 0,
    left: 0,
    height: 34,
    position: "absolute",
    right: 0
  },
  iconStack: {
    height: 34,
    flex: 1
  }
});

export default ItemAdd;
