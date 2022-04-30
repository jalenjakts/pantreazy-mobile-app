import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";
import SpiceItems from "./SpiceItems";

function SpiceBtn(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.imageStack}>
        <ImageBackground
          //source={require("../assets/images/1318101361_(2).jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <SpiceItems style={styles.spiceItems}></SpiceItems>
        </ImageBackground>
        <TouchableOpacity
          onPress={() => console.log("Navigate to SpiceScreen")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
      <Text style={styles.spices}>Spices</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#999999",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  image: {
    top: 0,
    left: 0,
    position: "absolute",
    borderRadius: 20,
    right: 27,
    bottom: 0,
    overflow: "hidden"
  },
  image_imageStyle: {},
  spiceItems: {
    height: 17,
    width: 12,
    marginTop: 57,
    marginLeft: 20
  },
  button: {
    top: 0,
    left: 0,
    width: 162,
    position: "absolute",
    bottom: 0
  },
  imageStack: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 5,
    bottom: 0
  },
  spices: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 136,
    height: 113
  }
});

export default SpiceBtn;
