import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialChipWithImageAndCloseButton2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/Dairy.jpg")}
        style={styles.leftImage}
      ></Image>
      <Text style={styles.dairy}>Dairy</Text>
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
  dairy: {
    fontSize: 25,
    color: "rgba(255,255,255,1)",
    paddingLeft: 4,
    paddingRight: 4
  },
  iconStyle: {
    color: "rgba(158,158, 158,0)",
    fontSize: 45,
    marginRight: 4
  }
});

export default MaterialChipWithImageAndCloseButton2;
