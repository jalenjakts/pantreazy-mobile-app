import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ProfileName(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.testName}>Test Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  testName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    alignSelf: "center"
  }
});

export default ProfileName;
