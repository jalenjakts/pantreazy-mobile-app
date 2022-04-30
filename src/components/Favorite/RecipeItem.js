import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import RecipePic from "../RecipePic";
import RecipeTitle from "../RecipeTitle";
import RecipeInfo from "../RecipeInfo";

function RecipeItem(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.recipePicStack}>
        <RecipePic style={styles.recipePic}></RecipePic>
        <RecipeTitle style={styles.recipeTitle}></RecipeTitle>
        <RecipeInfo style={styles.recipeInfo}></RecipeInfo>
      </View>
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
  recipePic: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 69,
    right: 0
  },
  recipeTitle: {
    position: "absolute",
    top: 68,
    height: 16,
    left: 0,
    right: 1
  },
  recipeInfo: {
    position: "absolute",
    top: 80,
    left: 1,
    height: 59,
    right: 3
  },
  recipePicStack: {
    height: 139,
    marginTop: 0,
    marginRight: 2
  }
});

export default RecipeItem;
