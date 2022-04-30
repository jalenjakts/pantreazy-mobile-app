import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function RecipePic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        //source={require("../assets/images/13715841320201.jpeg")}
        resizeMode="stretch"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    backgroundColor: "rgba(155,155,155,0)",
    flex: 1
  }
});

export default RecipePic;
