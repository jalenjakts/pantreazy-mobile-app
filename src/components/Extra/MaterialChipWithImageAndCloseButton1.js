import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialChipWithImageAndCloseButton1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/heart-healthy-vegetables.jpg")}
        style={styles.leftImage}
      ></Image>
      <Text style={styles.vegetables}>Vegetables</Text>
      <Icon name="checkbox-blank-outline" style={styles.iconStyle}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 50,
    flexDirection: "row"
  },
  leftImage: {
    height: 45,
    width: 45,
    backgroundColor: "#CCC",
    borderRadius: 16
  },
  vegetables: {
    fontSize: 25,
    color: "rgba(255,255,255,1)",
    paddingLeft: 4,
    paddingRight: 4
  },
  iconStyle: {
    fontSize: 45,
    marginRight: 4,
    color: "rgba(128,128,128,0)"
  }
});

export default MaterialChipWithImageAndCloseButton1;
