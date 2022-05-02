import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import HelpHeader from "../../components/Help/HelpHeader";
import Pic from "../../components/Help/Pic";

const ForgotPassword = (props) => {
  return (
    <View style={styles.container}>
      <HelpHeader
        leftIconButton="Go Back"
        rightIconButton="HomeScreen"
        style={styles.materialHeader1}
      ></HelpHeader>
      <Pic style={styles.userPic} />
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
  Pic: {
    height: 140,
    width: 140,
    marginTop: 60,
    alignSelf: "center"
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
