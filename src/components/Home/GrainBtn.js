import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";
import GrainItems from "./GrainItems";

function GrainBtn(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.imageStack}>
        <ImageBackground
          //source={require("../assets/images/different-bread-wheat-on-dark-260nw-310773026.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <GrainItems style={styles.grainItems}></GrainItems>
        </ImageBackground>
        <TouchableOpacity
          onPress={() => console.log("Navigate to GrainsScreen")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
      <Text style={styles.grains}>Grains</Text>
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
  grainItems: {
    height: 17,
    width: 8,
    marginTop: 44,
    marginLeft: 19
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
  grains: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 137,
    height: 126
  }
});

export default GrainBtn;
