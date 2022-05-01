import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ProfileEmail(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.testEmail}>{props.profileEmail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  testEmail: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    alignSelf: "center"
  }
});

export default ProfileEmail;
