import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Item from "../../components/Item";
import GrainsHeader from "../../components/Grains/GrainsHeader";

function GrainsScreen(props) {
  return (
    <View style={styles.container}>
      <GrainsHeader style={styles.materialHeader36}></GrainsHeader>
      <View style={styles.row1}>
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
  materialHeader36: {
    height: 80,
    marginTop: 0
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
    top: 114,
    left: 52,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  row1: {
    width: 108,
    height: 140,
    marginTop: 70,
    marginLeft: 12
  }
});

export default GrainsScreen;
