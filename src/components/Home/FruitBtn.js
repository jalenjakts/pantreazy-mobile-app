import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";
import FruitItems from "./FruitItems";

function FruitBtn(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.imageStack}>
        <ImageBackground
          //source={require("../assets/images/istockphoto-859692130-612x612_(2).jpg")}
          resizeMode="center"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <FruitItems style={styles.fruitItems}></FruitItems>
        </ImageBackground>
        <TouchableOpacity
          onPress={() => console.log("Navigate to FruitScreen")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
      <Text style={styles.fruit}>Fruit</Text>
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
  fruitItems: {
    height: 33,
    width: 74,
    marginTop: 50,
    marginLeft: 18
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
  fruit: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 135,
    height: 117
  }
});

export default FruitBtn;
