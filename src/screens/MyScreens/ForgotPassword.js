import React, { useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import ResetBtn from "../../components/ForgotPassword/ResetBtn";
import FpEmail from "../../components/ForgotPassword/FpEmail";
import Header from "../../components/Header";
import ForgotForm from "../../components/ForgotPassword/ForgotForm";

function ForgotPassword(props) {
  return (
    <View style={styles.container}>
      <Header style={styles.header1} />
      <Text style={styles.loremIpsum}>
        Enter the email address you have forgotten the password to below. You
        will be sent an email to verify the address. After verifying you can
        then reset the password.
      </Text>
      <ForgotForm style={styles.resetBtn} />
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
    alignSelf: "center"
  },
  materialRightIconTextbox1: {
    height: 43,
    width: "80%",
    marginTop: 8,
    alignSelf: "center"
  },
  resetBtn: {
    height: 43,
    width: "70%",
    borderRadius: 30,
    backgroundColor: "rgba(0,159,37,1)",
    marginTop: 37,
    marginLeft: "15%",
  },
});

export default ForgotPassword;
