import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MeatHeader from "../../components/Meats/MeatHeader";
import Item from "../../components/Item";

const MeatScreen = (props) => {
  return (
    <View style={styles.container}>
      <MeatHeader style={styles.materialHeader31} />
      <View style={styles.item1Stack}>
        <Item style={styles.item1}></Item>
        <Text style={styles.loremIpsum}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(228,243,212,1)"
  },
  materialHeader31: {
    height: 80
  },
  item1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 130,
    width: 108,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0
  },
  loremIpsum: {
    top: 113,
    left: 52,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  item1Stack: {
    width: 108,
    height: 130,
    marginTop: 120,
    marginLeft: 12
  }
});

export default MeatScreen;
