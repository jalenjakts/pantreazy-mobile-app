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
import DairyItems from "./DairyItems";

const DairyBtn = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={() => navigation.navigate('PantryFlow', { Screen: 'Dairy' })}>
      <View style={styles.imageStack}>
        <ImageBackground
          //source={require("../assets/images/dairy-products-on-wooden-base-and-dark-background-with-copy-space-stock-photography_csp88312303.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <DairyItems style={styles.dairyItems} />
        </ImageBackground>
        <TouchableOpacity
          style={styles.button}
        />
      </View>
      <Text style={styles.dairy}>Dairy</Text>
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
  dairyItems: {
    height: 17,
    width: 8,
    marginTop: 50,
    marginLeft: 14
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
  dairy: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 138,
    height: 117
  }
});

export default DairyBtn;
