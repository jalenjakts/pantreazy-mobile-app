import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import LogBtnSignBtn from "./LogBtnSignBtn";

function Header(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.pantrEasy1}>PantrEasy</Text>
      <LogBtnSignBtn
        style={styles.cupertinoSegmentWithTwoTabs1}
      ></LogBtnSignBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 30,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  pantrEasy1: {
    fontFamily: "beau-rivage-regular",
    color: "rgba(0,159,37,1)",
    fontSize: 80,
    textAlign: "center",
    marginTop: 30 
  },
  cupertinoSegmentWithTwoTabs1: {
    height: "25%",
    marginTop: 10
  }
});

export default Header;
