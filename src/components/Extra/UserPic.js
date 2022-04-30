import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function UserPic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 140 140" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={70}
            cy={70}
            rx={70}
            ry={70}
          ></Ellipse>
        </Svg>
        <Image
          //source={require("../assets/images/Chef-icon-600x600.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 100
  },
  ellipse: {
    width: 140,
    height: 140,
    position: "absolute",
    left: 0,
    top: 0
  },
  image: {
    top: 0,
    left: 0,
    width: 140,
    height: 140,
    position: "absolute",
  },
  ellipseStack: {
    width: 140,
    height: 140
  }
});

export default UserPic;
