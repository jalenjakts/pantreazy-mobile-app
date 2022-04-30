import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function LogSignBtns(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.textWrapper,
          {
            backgroundColor: props.textWrapper || undefined
          }
        ]}
      >
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          onPress={() => console.log("Navigate to LoginScreen")}
          style={styles.segmentTextWrapperLeft}
        >
          <Text style={styles.login}>{props.login || "Login"}</Text>
        </TouchableOpacity>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          onPress={() => console.log("Navigate to SignupScreen")}
          style={styles.segmentTextWrapperRight}
        >
          <Text style={styles.signup}>{props.signup || "Signup"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  textWrapper: {
    height: 29,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    width: 375
  },
  segmentTextWrapperLeft: {
    alignItems: "center",
    padding: 6,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    justifyContent: "center",
    width: 158,
    height: 29
  },
  login: {
    fontSize: 20,
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    width: 87,
    height: 27,
    alignSelf: "center",
    textAlign: "center"
  },
  segmentTextWrapperRight: {
    alignItems: "center",
    padding: 6,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    width: 153,
    height: 29,
    justifyContent: "center"
  },
  signup: {
    fontSize: 20,
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    width: 76,
    height: 28,
    textAlign: "center"
  }
});

export default LogSignBtns;
