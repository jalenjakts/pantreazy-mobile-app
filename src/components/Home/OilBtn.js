import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";
import OilItems from "./OilItems";

const OilBtn = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={() => navigation.navigate('PantryFlow', { Screen: 'Oils' })}>
      <View style={styles.imageStack}>
        <ImageBackground
          //source={require("../assets/images/healthy-vegetable-oils-in-glass-bottles-avocado-oil-chickpea-oil-peanut-oil-almond-oil-dark-stock-photograph_csp81982692.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <OilItems style={styles.oilItems} />
        </ImageBackground>
        <TouchableOpacity
          style={styles.button}
        />
      </View>
      <Text style={styles.oils}>Oils</Text>
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
  oilItems: {
    height: 17,
    width: 6,
    marginTop: 47,
    marginLeft: 15
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
  oils: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 135,
    height: 124
  }
});

export default OilBtn;
