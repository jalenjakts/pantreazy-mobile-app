import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function ScannedItemCnt(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialCommunityIconsIcon
        name="plus-circle"
        style={styles.icon2}
      ></MaterialCommunityIconsIcon>
      <MaterialCommunityIconsIcon
        name="minus-circle"
        style={styles.icon}
      ></MaterialCommunityIconsIcon>
      <View style={styles.textWrapper}>
        <TouchableOpacity style={styles.segmentTextWrapper1}></TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper2}>
          <Text style={styles.kittens}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper3}></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon2: {
    top: 6,
    left: 280,
    position: "absolute",
    color: "rgba(0,159,37,1)",
    fontSize: 40
  },
  icon: {
    top: 6,
    left: 60,
    position: "absolute",
    color: "rgba(0,159,37,1)",
    fontSize: 40
  },
  textWrapper: {
    height: 47,
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row"
  },
  segmentTextWrapper1: {
    flex: 1,
    alignItems: "center",
    padding: 6,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  segmentTextWrapper2: {
    flex: 1,
    alignItems: "center",
    padding: 6,
    justifyContent: "center"
  },
  kittens: {
    fontSize: 30,
    color: "rgba(0,0,0,1)"
  },
  segmentTextWrapper3: {
    flex: 1,
    alignItems: "center",
    padding: 6,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    left: 240,
    width: 105,
    top: 0,
    height: 29
  }
});

export default ScannedItemCnt;
