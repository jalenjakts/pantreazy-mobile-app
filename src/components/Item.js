import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ItemPic from "./ItemPic";
import ItemName from "./ItemName";

function Item(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ItemPic style={styles.itemPic}></ItemPic>
      <ItemName style={styles.itemName}></ItemName>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  itemPic: {
    height: 78,
    width: "100%",
    borderRadius: 0
  },

  itemName: {
    height: 19,
    width: 108,
    backgroundColor: "#fff",
    marginTop: 0
  }
});

export default Item;
