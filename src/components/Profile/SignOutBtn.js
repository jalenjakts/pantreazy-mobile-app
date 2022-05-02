import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function SignOutBtn(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.signOut}>Sign Out</Text>
      <Icon name="account" style={styles.iconStyle}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,159,37,1)",
    paddingLeft: 12,
    borderRadius: 50
  },
  signOut: {
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


export default SignOutBtn;
