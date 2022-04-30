import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Item2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Image
          source={require("../assets/images/Well-Marbled-Ribeye-Steak.jpg")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0
  },
  rect: {
    width: 108,
    height: 78,
    backgroundColor: "#E6E6E6"
  },
  image: {
    width: 108,
    height: 78
  }
});

export default Item2;
