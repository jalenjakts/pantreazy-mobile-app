import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SearchRecipeHeader from "../../components/SearchRecipe/SearchRecipeHeader";
import RecSearchItem from "../../components/SearchRecipe/RecSearchItem";

function SearchRecipeScreen(props) {
  return (
    <View style={styles.container}>
      <SearchRecipeHeader style={styles.header}></SearchRecipeHeader>
      <View style={styles.row1}>
        <RecSearchItem style={styles.recItem}></RecSearchItem>
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
  recItem: {
    height: 140,
    width: "44%",
    marginLeft: "4%"
  },

  row1: {
    height: 140,
    flexDirection: "row",
    marginTop: 80,
    marginLeft: 10,
    marginRight: 10
  }
});

export default SearchRecipeScreen;
