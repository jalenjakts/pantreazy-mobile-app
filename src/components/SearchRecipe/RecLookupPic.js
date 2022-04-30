import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function RecLookupPic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        //source={require("../assets/images/13715841320202.jpeg")}
        resizeMode="stretch"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 171,
    height: 69
  }
});

export default RecLookupPic;
