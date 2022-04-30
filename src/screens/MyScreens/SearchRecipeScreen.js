import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import RecipeSearchBar from "../../components/SearchRecipe/RecipeSearchBar";
import SearchRecipeHeader from "../../components/SearchRecipe/SearchRecipeHeader";
import RecSearchItem from "../../components/SearchRecipe/RecSearchItem";

function SearchRecipeScreen(props) {
  return (
    <View style={styles.container}>
      <SearchRecipeHeader style={styles.header}></SearchRecipeHeader>
      <RecipeSearchBar style={styles.searchBar}></RecipeSearchBar>
      <View style={styles.materialCard51Row}>
        <RecSearchItem style={styles.materialCard51}></RecSearchItem>
        <RecSearchItem style={styles.materialCard52}></RecSearchItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(228,243,212,1)"
  },
  header: {
    height: 80,
    width: "100%",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0,
    shadowRadius: 0,
    marginTop: 0,
    alignSelf: "center"
  },
  searchBar: {
    height: 56,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0,
    shadowRadius: 0,
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
  materialCard51Row: {
    height: 140,
    flexDirection: "row",
    marginTop: 80,
    marginLeft: 10,
    marginRight: 10
  }
});

export default SearchRecipeScreen;
