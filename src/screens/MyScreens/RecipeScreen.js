import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import RecipeHeader from "../../components/Recipe/RecipeHeader";
import RecPicture from "../../components/Recipe/RecPicture";
import RecItemName from "../../components/Recipe/RecItemName";
import RecIngredientsText from "../../components/Recipe/RecIngredientsText";
import Ingredients from "../../components/Recipe/Ingredients";
import RecCookStepsText from "../../components/Recipe/RecCookStepsText";
import CookSteps from "../../components/Recipe/CookSteps";

const RecipeScreen = (props) => {
  return (
    <View style={styles.container}>
      <RecipeHeader style={styles.materialHeader31}></RecipeHeader>
      <RecPicture style={styles.recPicture}></RecPicture>
      <View style={styles.recItemNameStack}>
        <RecItemName style={styles.recItemName}></RecItemName>
        <RecIngredientsText
          style={styles.recIngredientsText}
        ></RecIngredientsText>
      </View>
      <Ingredients style={styles.ingredients}></Ingredients>
      <RecCookStepsText style={styles.recCookStepsText}></RecCookStepsText>
      <CookSteps style={styles.cookSteps}></CookSteps>
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
  recPicture: {
    height: 240,
    width: 300,
    marginTop: 40,
    marginLeft: 38
  },
  recItemName: {
    position: "absolute",
    top: 0,
    left: 20,
    height: 46,
    width: 300
  },
  recIngredientsText: {
    position: "absolute",
    top: 35,
    left: 0,
    height: 25,
    width: 340
  },
  recItemNameStack: {
    width: 340,
    height: 60,
    marginLeft: 18
  },
  ingredients: {
    height: 160,
    width: 340,
    marginLeft: 18
  },
  recCookStepsText: {
    height: 20,
    width: 340,
    marginTop: 20,
    marginLeft: 20
  },
  cookSteps: {
    height: 140,
    width: 340,
    marginLeft: 20
  }
});

export default RecipeScreen;
