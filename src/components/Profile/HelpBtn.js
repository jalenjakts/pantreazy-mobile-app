import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HelpBtn = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={() => navigation.navigate('Help')}>
      <Text style={styles.help}>Info</Text>
      <Icon name="comment-question" style={styles.iconStyle}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 12,
    borderRadius: 50,
    backgroundColor: "rgba(0,159,37,1)"
  },
  help: {
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

export default HelpBtn;
