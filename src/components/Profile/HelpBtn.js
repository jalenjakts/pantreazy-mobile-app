import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function HelpBtn(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.help}>Help</Text>
      <Icon name="comment-question" style={styles.iconStyle}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 12,
    borderRadius: 50,
    backgroundColor: "rgba(0,159,37,1)"
  },
  help: {
    fontSize: 16,
    color: "#FFFFFF"
  },
  iconStyle: {
    color: "#FFFFFF",
    fontSize: 24,
    marginLeft: 4,
    marginRight: 4
  }
});

export default HelpBtn;
