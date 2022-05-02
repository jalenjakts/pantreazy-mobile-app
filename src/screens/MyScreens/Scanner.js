import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import BarcodeScanner from "../../components/Scanner/BarcodeScanner";
import ScannerHeader from "../../components/Scanner/ScannerHeader";

const Scanner = (props) => {
  return (
    <View style={styles.container}>
      <ScannerHeader
        leftIconButton="Go Back"
        rightIconButton="HomeScreen"
        style={styles.materialHeader1}
      />
      <Text style={styles.scanTheBarcode}>Scan the barcode</Text>
      <Text style={styles.loremIpsum}>
        Line up the barcode inside the box and keep the phone steady.
      </Text>
      <BarcodeScanner style={styles.materialCardBasic}></BarcodeScanner>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(228,243,212,1)"
  },
  materialHeader1: {
    height: 80,
    width: "100%",
    marginTop: 0
  },
  scanTheBarcode: {
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 30,
    marginTop: 50
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    marginTop: 30,
    marginLeft: "5%",
    marginRight: "5%"
  },
  materialCardBasic: {
    height: 371,
    width: "90%",
    borderWidth: 1,
    borderColor: "rgba(208,2,27,1)",
    marginTop: 30,
    marginLeft: "5%"
  }
});

export default Scanner;
