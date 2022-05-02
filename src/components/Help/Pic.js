import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Pic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 140 140" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            //fill="rgba(230, 230, 230,1)"
            cx={70}
            cy={70}
            rx={70}
            ry={70}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../../../assets/images/mix.jpg")}
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
    alignSelf: "center",
    width: 240,
    height: 240,
    position: "absolute",
    left: 0,
    top: 30
  },
  image: {
    alignSelf: "center",
    top: 50,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  ellipseStack: {
    alignSelf: "center",
    width: 340,
    height: 340
  }
});

export default Pic;
