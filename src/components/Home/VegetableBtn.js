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
import VegItems from "./VegItems";

const VegetableBtn = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={() => navigation.navigate('PantryFlow', { Screen: 'Veggies' })}>
      <View style={styles.imageStack}>
        <ImageBackground
          //source={require("../assets/images/360_F_250255913_ESX6n2gO3giI5RWxPQl991X9zgZQeWVj_(2).jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <VegItems style={styles.vegItems} />
        </ImageBackground>
        <TouchableOpacity
          style={styles.button}
        />
      </View>
      <Text style={styles.vegetables}>Vegetables</Text>
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
    width: 135,
    position: "absolute",
    borderRadius: 20,
    //backgroundColor: "rgba(230, 230, 230,1)",
    bottom: 0,
    overflow: "hidden"
  },
  image_imageStyle: {},
  vegItems: {
    height: 17,
    width: 8,
    marginTop: 57,
    marginLeft: 20
  },
  button: {
    top: 0,
    left: 0,
    width: 178,
    position: "absolute",
    bottom: 0
  },
  imageStack: {
    top: 0,
    left: 0,
    width: 178,
    position: "absolute",
    bottom: 0
  },
  vegetables: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "left",
    width: 143,
    height: 111,
    left: 0,
    top: 0
  }
});

export default VegetableBtn;
