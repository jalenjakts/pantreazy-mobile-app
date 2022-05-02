import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { Context as AuthContext } from "../../context/authContext";

const LoginForm = () => {
  const navigation = useNavigation();
  const { state, login, clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.inputStyle}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon name="account-box" style={styles.iconStyle} />
      </View>

      <View style={styles.container}>
        <TextInput
          placeholder="Password"
          style={styles.inputStyle}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Icon name="eye" style={styles.iconStyle} />
      </View>

      <TouchableOpacity
        style={[styles.forgotPassContainer, styles.forgotPassContainer2]}
      >
        <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Forgot")}
          style={styles.forgotPassButton}
        ></TouchableOpacity>
      </TouchableOpacity>

      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}

      <TouchableOpacity
        style={[styles.loginButtonContainer, styles.loginButtonContainer2]}
        onPress={() => login({ email, password })}
      >
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: "70%",
    marginTop: 81,
    marginLeft: "15%",
  },
  inputStyle: {
    color: "#000",
    paddingRight: 16,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingRight: 8,
  },
  forgotPassContainer: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
  },
  forgotPassContainer2: {
    height: 36,
    width: "40%",
    overflow: "visible",
    marginTop: 10,
    marginLeft: "50%",
  },
  forgotPassButton: {
    top: 0,
    left: 0,
    width: "100%",
    height: 36,
    position: "absolute",
  },
  forgotPassword: {
    color: "rgba(155,155,155,1)",
    fontSize: 12,
  },
  loginButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "rgba(0,159,37,1)",
  },
  loginButtonContainer2: {
    height: 43,
    width: "70%",
    borderRadius: 30,
    backgroundColor: "rgba(0,159,37,1)",
    marginTop: 37,
    marginLeft: "15%",
  },
  loginButton: {
    top: 0,
    left: 0,
    width: 283,
    position: "absolute",
    bottom: 0,
  },
  login: {
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-regular",
    fontSize: 20,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default LoginForm;
