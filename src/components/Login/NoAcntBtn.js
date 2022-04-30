import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NoAcntBtn = (props) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.signup}>Don&#39;t have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={styles.button}>
        <Text style={styles.signup2}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    minWidth: 88,
  },
  signup: {
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    width: 180,
    height: 19,
  },
  signup2: {
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

export default NoAcntBtn;
