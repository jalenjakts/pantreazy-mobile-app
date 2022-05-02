import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HaveAcntBtn = (props) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.login}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
        <Text style={styles.login2}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "transparent",
    flexDirection: "row",
    minWidth: 88,
  },
  login: {
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    width: 180,
    height: 19,
  },
  login2: {
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    height: 19,
  },
  button: {
    top: 0,
    left: 173,
    width: 51,
    position: "absolute",
    bottom: 0,
  },
});

export default HaveAcntBtn;
