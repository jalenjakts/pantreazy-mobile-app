import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialCard5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/1371584132020.jpeg")}
        resizeMode="cover"
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>Title goes here</Text>
        <Text style={styles.subtitleStyle}>Subtitle here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    minHeight: 210,
    height: 129,
    width: 62,
    alignSelf: "center"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    alignSelf: "center",
    left: -7,
    width: 189,
    top: 60,
    height: 97
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  }
});

export default MaterialCard5;
