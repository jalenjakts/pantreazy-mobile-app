import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import FavHeader from "../../components/Favorite/FavHeader";
import RecipeItem from "../../components/Favorite/RecipeItem";

function FavScreen(props) {
  return (
    <View style={styles.container}>
      <FavHeader style={styles.materialHeader3}></FavHeader>
      <View style={styles.row1}>
        <RecipeItem style={styles.materialCard51}></RecipeItem>
        <RecipeItem style={styles.materialCard52}></RecipeItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(228,243,212,1)"
  },
  materialHeader3: {
    height: 80,
    marginTop: 0
  },
  materialCard51: {
    height: 140,
    width: "44%",
    marginLeft: "4%"
  },
  materialCard52: {
    height: 140,
    width: "44%",
    marginLeft: "4%"
  },
  row1: {
    height: 140,
    flexDirection: "row",
    marginTop: 70,
  }
});

export default FavScreen;
