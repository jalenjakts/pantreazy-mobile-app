import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import RecLookupPic from "../SearchRecipe/RecLookupPic";
import RecLookupTitle from "../SearchRecipe/RecLookupTitle";
import RecLookupInfo from "../SearchRecipe/RecLookupInfo";
import { useNavigation } from "@react-navigation/native";

const RecSearchItem = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={() => navigation.navigate('Recipe')}>
      <RecLookupPic style={styles.recLookupPic} />
      <RecLookupTitle style={styles.recLookupTitle} />
      <RecLookupInfo style={styles.recLookupInfo} />
    </TouchableOpacity>
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
      width: 2,
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
    marginTop: 1,
    marginLeft: 1
  },
  recLookupTitle: {
    height: 16
  },
  recLookupInfo: {
    height: 55
  }
});

export default RecSearchItem;
