import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const SearchRecipeHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftIconButtonRow}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.profileBtn}
        >
          <MaterialCommunityIconsIcon
            name="menu"
            style={styles.profileIcon}
          />
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.recipes}>
            Recipes
          </Text>
        </View>
      </View>
      <View style={styles.leftIconButtonRowFiller} />
      <View style={styles.rightIconsWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.iconButton}
        >
          <MaterialCommunityIconsIcon
            name="home"
            style={styles.rightIcon1}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Favorites')}
          style={styles.iconButton}
        >
          <MaterialCommunityIconsIcon
            name="heart"
            style={styles.rightIcon2}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Barcode')}
          style={styles.iconButton}
        >
          <MaterialCommunityIconsIcon
            name="barcode-scan"
            style={styles.rightIcon3}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,159,37,1)",
    //width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  profileBtn: {
    padding: 9
  },
  profileIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    alignSelf: "flex-end",
    marginLeft: 26,
    marginBottom: 11
  },
  recipes: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 18
  },
  leftIconButtonRow: {
    flexDirection: "row",
    marginTop: 28,
    marginBottom: 0
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28
  },
  iconButton: {
    padding: 11
  },
  rightIcon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  }
});

export default SearchRecipeHeader;
