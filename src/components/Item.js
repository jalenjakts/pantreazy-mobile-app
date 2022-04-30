import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ItemPic from "./ItemPic";
import ItemSub from "./ItemSub";
import ItemAmount from "./ItemAmount";
import ItemAdd from "./ItemAdd";
import ItemName from "./ItemName";

function Item(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ItemPic style={styles.itemPic}></ItemPic>
      <ItemName style={styles.itemName}></ItemName>
      <View style={styles.subItemRowRow}>
        <View style={styles.subItemRow}>
          <ItemSub style={styles.subItem}></ItemSub>
          <ItemAmount style={styles.itemAmount}></ItemAmount>
        </View>
        <View style={styles.subItemRowFiller}></View>
        <ItemAdd style={styles.materialButtonTransparentHamburger}></ItemAdd>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  itemPic: {
    height: 78,
    width: 108,
    borderRadius: 0
  },
  subItem: {
    height: 33,
    width: 34
  },
  itemAmount: {
    height: 26,
    width: 13,
    marginLeft: 14,
    marginTop: 0
  },
  subItemRow: {
    height: 33,
    flexDirection: "row"
  },
  subItemRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonTransparentHamburger: {
    height: 34,
    width: 34
  },
  subItemRowRow: {
    height: 34,
    flexDirection: "row",
    marginTop: 0
  },
  itemName: {
    height: 19,
    width: 108,
    backgroundColor: "#fff",
    marginTop: 0
  }
});

export default Item;
