import React from "react";
import { StyleSheet, View } from "react-native";
import NoAcntBtn from "../../components/Login/NoAcntBtn";
import Header from "../../components/Header";
import LoginForm from "../../components/Login/LoginForm";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <LoginForm />
      <View style={styles.signupText}>
        <NoAcntBtn
          button="SignupScreen"
          style={styles.signupBtn}
        ></NoAcntBtn>
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
  signinBtn: {
    height: 43,
    width: "70%",
    borderRadius: 30,
    backgroundColor: "rgba(0,159,37,1)",
    marginTop: 37,
    marginLeft: "15%"
  },
  signupText: {
    height: 40,
    width: "70%",
    flexDirection: "row",
    marginTop: 25,
    marginLeft: "15%",
    marginRight: 6
  },
  signupBtn: {
    height: 36,
    width: "70%",
    marginLeft: "8%"
  }
});

export default LoginScreen;
