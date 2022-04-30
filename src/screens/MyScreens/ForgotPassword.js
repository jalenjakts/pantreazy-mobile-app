import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ResetBtn from "../../components/ForgotPassword/ResetBtn";
import FpEmail from "../../components/ForgotPassword/FpEmail";
import Header from "../../components/Header";

function ForgotPassword(props) {
  return (
    <View style={styles.container}>
      <Header style={styles.header1}></Header>
      <Text style={styles.loremIpsum}>
        Enter the email address you have forgotten the password to below. You
        will be sent an email to verify the address. After verifying you can
        then reset the password.
      </Text>
      <FpEmail style={styles.materialRightIconTextbox1}></FpEmail>
      <ResetBtn button="LoginScreen" style={styles.resetBtn}></ResetBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(228,243,212,1)"
  },
  header1: {
    height: 210,
    width: "100%",
    marginTop: 0
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
  materialRightIconTextbox1: {
    height: 43,
    width: "80%",
    marginTop: 8,
    //marginLeft: "5%"
    alignSelf: "center"
  },
  resetBtn: {
    height: 43,
    width: "70%",
    marginTop: 50,
    alignSelf: "center"
  },
});

export default ForgotPassword;
