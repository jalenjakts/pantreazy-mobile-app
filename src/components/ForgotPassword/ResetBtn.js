import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ResetBtn = (props) => {
  return (
    <TouchableOpacity /* Conditional navigation not supported at the moment */
      onPress={() => console.log("Navigate to LoginScreen")}
      style={[styles.container, props.style]}
    >
      <Text style={styles.verifyEmail}>Verify Email</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
  verifyEmail: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
  }
});

export default ResetBtn;
