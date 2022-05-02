import React, { useState, useContext, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { Context as AuthContext } from "../../context/authContext";

const SignupForm = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPass] = useState("");
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textName}>FIRST NAME</Text>
        <TextInput
          placeholderTextColor="rgba(0,0,0,1)"
          style={styles.inputStyle}
          value={firstName}
          onChangeText={setFirstName}
          autoCorrect={false}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textName}>LAST NAME</Text>
        <TextInput
          placeholderTextColor="rgba(0,0,0,1)"
          style={styles.inputStyle}
          value={lastName}
          onChangeText={setLastName}
          autoCorrect={false}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textName}>EMAIL</Text>
        <TextInput
          placeholderTextColor="rgba(0,0,0,1)"
          style={styles.inputStyle}
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textName}>PASSWORD</Text>
        <TextInput
          placeholderTextColor="rgba(0,0,0,1)"
          style={styles.inputStyle}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textName}>CONFIRM PASSWORD</Text>
        <TextInput
          style={styles.inputStyle}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          value={confirmPassword}
          onChangeText={setConfirmPass}
        />
      </View>
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <TouchableOpacity
        style={[styles.buttonContainer, styles.buttonContainer2]}
      >
        <Text style={styles.createNewAccount}>Create new account</Text>
        <TouchableOpacity
          onPress={() =>
            signup({ firstName, lastName, email, password, confirmPassword })
          }
          style={styles.button}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    width: "70%",
    height: 60,
    marginTop: "5%",
    marginLeft: "15%",
  },
  textName: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 2,
  },
  buttonContainer: {
    backgroundColor: "#CCCCCC",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
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
  },
  buttonContainer2: {
    borderRadius: 30,
    backgroundColor: "rgba(0,159,37,1)",
    width: "70%",
    height: 43,
    marginTop: "10%",
    marginLeft: "15%",
  },
  button: {
    top: 0,
    left: 0,
    width: 276,
    height: 43,
    position: "absolute",
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "roboto-regular",
  },
  createNewAccount: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "roboto-regular",
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 5
  }
});

export default SignupForm;
