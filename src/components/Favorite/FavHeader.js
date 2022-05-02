import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function FavHeader(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftIconButtonRow}>
        <TouchableOpacity
          onPress={() => console.log("Navigate to ProfileScreen")}
          style={styles.profileBtn}
        >
          <MaterialCommunityIconsIcon
            name="menu"
            style={styles.profileIcon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.favorites}>
            Favorites
          </Text>
        </View>
      </View>
      <View style={styles.leftIconButtonRowFiller}></View>
      <View style={styles.rightIconsWrapper}>
        <TouchableOpacity
          onPress={() => console.log("Navigate to RecipeScreen")}
          style={styles.iconButton}
        >
          <MaterialCommunityIconsIcon
            name="magnify"
            style={styles.rightIcon1}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Navigate to HomeScreen")}
          style={styles.iconButton}
        >
          <MaterialCommunityIconsIcon
            name="home"
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
  profileBtn: {
    padding: 9
  },
  profileIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    alignSelf: "flex-end",
    marginLeft: 26,
    marginBottom: 11
  },
  favorites: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 18
  },
  leftIconButtonRow: {
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 1
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25
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
  }
});

export default FavHeader;
