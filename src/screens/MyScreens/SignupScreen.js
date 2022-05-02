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
        ></HaveAcntBtn>
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
  loginText: {
    height: 40,
    width: "70%",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: "14%",
    marginRight: 6
  },
  loginBtn: {
    height: 10,
    width: "70%",
    marginLeft: "13%"
  }
});

export default SignupScreen;
