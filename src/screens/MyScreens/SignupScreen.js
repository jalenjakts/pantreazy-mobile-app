import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./../../components/Header";
import HaveAcntBtn from "../../components/Signup/HaveAcntBtn"
import SignupForm from "../../components/Signup/SignupForm";

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <SignupForm />
      <View style={styles.loginText}>
        <HaveAcntBtn
          button="LoginScreen"
          style={styles.loginBtn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(228,243,212,1)"
  },
  header: {
    height: 210,
    width: "100%",
    marginTop: 0
  },
  materialStackedLabelTextbox: {
    width: "70%",
    height: 60,
    marginTop: "5%",
    marginLeft: "15%",

  },
  materialButtonLight: {
    borderRadius: 30,
    backgroundColor: "rgba(0,159,37,1)",
    width: "70%",
    height: 43,
    marginTop: "10%",
    marginLeft: "15%"
  },
  textInput: {
    top: 10,
    marginLeft: "12%",
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(97,97,97,1)",
    width: "100%",
    height: 17
  },
  loginText: {
    height: 40,
    width: "70%",
    flexDirection: "row",
    marginTop: 25,
    marginLeft: "15%",
    marginRight: 6
  },
  loginBtn: {
    height: 36,
    width: "70%",
    marginLeft: "13%"
  }
});

export default SignupScreen;
