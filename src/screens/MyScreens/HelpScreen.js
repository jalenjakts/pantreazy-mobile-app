import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import HelpHeader from "../../components/Help/HelpHeader";
//import Header from "../../components/Header";

function ForgotPassword(props) {
  return (
    <View style={styles.container}>
      <HelpHeader
        leftIconButton="Go Back"
        rightIconButton="HomeScreen"
        style={styles.materialHeader1}
      ></HelpHeader>
      <Text style={styles.loremIpsum}>
        This is where we will put some helpful information.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(228,243,212,1)"
  },
  materialHeader1: {
    height: 80
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    height: 139,
    width: "90%",
    marginTop: "25%",
    //marginLeft: "5%"
    alignSelf: "center"
  },

});

export default ForgotPassword;
