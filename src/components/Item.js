import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ItemPic from "./ItemPic";
import ItemName from "./ItemName";
import { Context as FoodContext } from "../context/mainContext";

const Item = (props) => {
  const { state, get_pantry } = useContext(FoodContext);
  const [pantry, setPantry] = useState([]);

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
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 0
  }
});

export default Item;
