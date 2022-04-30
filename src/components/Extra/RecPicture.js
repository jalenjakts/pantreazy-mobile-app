import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function RecPicture(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/13715841320203.jpeg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    flex: 1
  }
});

export default RecPicture;
