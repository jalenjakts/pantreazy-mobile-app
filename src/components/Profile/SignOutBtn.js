import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Context as AuthContext } from '../../context/authContext';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SignOutBtn = (props) => {
  const { state, signout } = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => signout()}>
      <View style={[styles.container, props.style]}>
        <Text style={styles.signOut}>Sign Out</Text>
        <Icon name="exit-to-app" style={styles.iconStyle}></Icon>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,159,37,0.22)",
    paddingLeft: 12,
    borderRadius: 50
  },
  signOut: {
    fontSize: 16,
    color: "rgba(0,0,0,0.87)"
  },
  iconStyle: {
    color: "#9E9E9E",
    fontSize: 24,
    marginLeft: 4,
    marginRight: 4
  }
});

export default SignOutBtn;
