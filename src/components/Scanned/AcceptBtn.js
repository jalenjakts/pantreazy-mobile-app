import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function AcceptBtn(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.accept}>Accept</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,159,37,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  accept: {
    color: "#fff",
    fontSize: 17
  }
});

export default AcceptBtn;
