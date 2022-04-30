import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function ItemSub(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconStack}>
        <Icon name="minus-circle" style={styles.icon}></Icon>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    top: 0,
    position: "absolute",
    color: "rgba(0,159,37,1)",
    fontSize: 30,
    left: 3
  },
  button: {
    top: 0,
    left: 0,
    width: 35,
    height: 35,
    position: "absolute"
  },
  iconStack: {
    width: 35,
    height: 35
  }
});

export default ItemSub;
