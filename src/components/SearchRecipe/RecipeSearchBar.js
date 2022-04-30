import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function RecipeSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TouchableOpacity style={styles.leftIconButton}>
          <MaterialCommunityIconsIcon
            name="arrow-left"
            style={styles.leftIcon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <View style={styles.inputStyleStack}>
          <TextInput placeholder="Search" style={styles.inputStyle}></TextInput>
          <TouchableOpacity style={styles.rightIconButton}>
            <MaterialCommunityIconsIcon
              name="close"
              style={styles.rightIcon}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,159,37,1)",
    padding: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0,
    shadowRadius: 0,
    justifyContent: "center"
  },
  rect1: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 2,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0,
    shadowRadius: 0,
    width: 367,
    height: 48,
    alignSelf: "center"
  },
  leftIconButton: {
    padding: 11,
    marginLeft: 5,
    marginTop: 5
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6
  },
  inputStyle: {
    height: 48,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 257,
    lineHeight: 16,
    position: "absolute",
    left: 0,
    top: 0
  },
  rightIconButton: {
    padding: 11,
    position: "absolute",
    top: 0,
    right: 0,
    alignItems: "center"
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6
  },
  inputStyleStack: {
    width: 286,
    height: 48,
    marginLeft: 25,
    marginTop: 5
  }
});

export default RecipeSearchBar;
