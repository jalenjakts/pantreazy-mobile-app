import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

const ItemPic = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        // asource={require(product_image)}
        resizeMode="cover"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6"
  },
  image: {
    width: 108,
    height: 89
  }
});

export default ItemPic;
