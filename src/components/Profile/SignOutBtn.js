import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Context as AuthContext } from '../../context/authContext';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SignOutBtn = (props) => {
  const { state, signout } = useContext(AuthContext);
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={() => signout()}>
      <Text style={styles.signOut}>Sign Out</Text>
      <Icon name="account" style={styles.iconStyle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,159,37,1)",
    paddingLeft: 12,
    borderRadius: 50
  },
  signOut: {
    fontSize: 16,
    color: "#FFFFFF"
  },
  iconStyle: {
    color: "#FFFFFF",
    fontSize: 24,
    marginLeft: 4,
    marginRight: 4
  }
});


export default SignOutBtn;
