import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";
import DryGoodItems from "./DryGoodItems";
import { useNavigation } from "@react-navigation/native";

const DryGoodBtn = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={() => navigation.navigate('DryGoods')}>
      <View style={styles.imageStack}>
        <ImageBackground
          //source={require("../assets/images/istockphoto-1283844624-612x612.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <DryGoodItems style={styles.dryGoodItems} />
        </ImageBackground>
        <TouchableOpacity
          style={styles.button}
        />
      </View>
      <Text style={styles.dryGoods}>Dry Goods</Text>
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
  dryGoodItems: {
    height: 17,
    width: 6,
    marginTop: 37,
    marginLeft: 13
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
  dryGoods: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 138,
    height: 138
  }
});

export default DryGoodBtn;
