import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import RecLookupPic from "./RecLookupPic";
import RecLookupTitle from "./RecLookupTitle";
import RecLookupInfo from "./RecLookupInfo";

function RecSearchItem(props) {
  return (
    <View style={[styles.container, props.style]}>
      <RecLookupPic style={styles.recLookupPic}></RecLookupPic>
      <RecLookupTitle style={styles.recLookupTitle}></RecLookupTitle>
      <RecLookupInfo style={styles.recLookupInfo}></RecLookupInfo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  recLookupPic: {
    height: 69,
    width: 171,
    marginTop: -1,
    marginLeft: -1
  },
  recLookupTitle: {
    height: 16
  },
  recLookupInfo: {
    height: 55
  }
});

export default RecSearchItem;
