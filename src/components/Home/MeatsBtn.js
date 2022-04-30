import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";
import MeatItems from "./MeatItems";

function MeatsBtn(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.imageStack}>
        <ImageBackground
          //source={require("../assets/images/homepage_hero_image_2.webp")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <MeatItems style={styles.items}></MeatItems>
        </ImageBackground>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          onPress={() => console.log("Navigate to MeatScreen")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
      <Text style={styles.meats}>Meats</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF4",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 16
  },
  image: {
    top: 0,
    left: 0,
    position: "absolute",
    borderRadius: 20,
    //backgroundColor: "rgba(230, 230, 230,1)",
    right: 32,
    bottom: 0,
    overflow: "hidden"
  },
  image_imageStyle: {},
  items: {
    height: 17,
    width: 8,
    marginTop: 57,
    marginLeft: 20
  },
  button: {
    top: 80,
    left: 0,
    width: 167,
    height: 67,
    position: "absolute"
  },
  imageStack: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  meats: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "left",
    left: 0,
    width: 132,
    height: 103,
    alignSelf: "center"
  }
});

export default MeatsBtn;
