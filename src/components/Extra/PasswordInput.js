import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PasswordInput = (props) => {
  const [show, setShow] = useState(true);
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Password"
        style={styles.inputStyle}
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry={show}
      ></TextInput>
      <TouchableOpacity onPress={() => { setShow = false }}>
        <Icon name="eye" style={styles.iconStyle}></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 16,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingRight: 8
  }
});

export default PasswordInput;
