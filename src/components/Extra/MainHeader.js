import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Menu from "./Menu";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MainHeader(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.menuRow}>
        <Menu style={styles.menu}></Menu>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.home}>
            Home
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <TouchableOpacity /* Conditional navigation not supported at the moment */
            style={styles.iconButton}
          >
            <MaterialCommunityIconsIcon
              name="magnify"
              style={styles.rightIcon1}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Navigate to FavScreen")}
            style={styles.iconButton}
          >
            <MaterialCommunityIconsIcon
              name="heart"
              style={styles.rightIcon2}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Navigate to Scanner")}
            style={styles.iconButton}
          >
            <MaterialCommunityIconsIcon
              name="barcode-scan"
              style={styles.rightIcon3}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,159,37,1)",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  menu: {
    width: 46,
    height: 53
  },
  textWrapper: {
    justifyContent: "flex-start",
    width: 120,
    height: 30,
    alignSelf: "flex-start",
    marginLeft: 27,
    marginTop: 17
  },
  home: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 18
  },
  button: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 43,
    justifyContent: "flex-end",
    width: 159,
    marginLeft: 8
  },
  iconButton: {
    padding: 11
  },
  rightIcon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  menuRow: {
    height: 53,
    flexDirection: "row",
    alignItems: "flex-end",
    flex: 1,
    marginRight: 15
  }
});

export default MainHeader;
