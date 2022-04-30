import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function CupertinoSegmentWithTwoTabs2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <View style={styles.rect}>
          <Text style={styles.puppies}>Don&#39;t have an account?</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log("Navigate to SignupScreen")}
          style={styles.segmentTextWrapperRight}
        >
          <Text style={styles.signup}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    //height: "10%"
  },
  textWrapper: {
    height: 29,
    //flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row"
  },
  rect: {
    flex: 0.63,
    alignItems: "flex-end",
    padding: 6,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  puppies: {
    fontSize: 13,
    color: "rgba(0,0,0,1)",
    textAlign: "right"
  },
  segmentTextWrapperRight: {
    flex: 0.37,
    alignItems: "center",
    padding: 6,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  },
  signup: {
    fontSize: 13,
    fontFamily: "roboto-700",
    color: "rgba(74,74,74,1)",
    height: 25,
    alignSelf: "stretch"
  }
});

export default CupertinoSegmentWithTwoTabs2;
