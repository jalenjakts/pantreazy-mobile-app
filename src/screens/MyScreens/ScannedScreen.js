import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ScannerHeader from "../../components/Scanner/ScannerHeader";
import ScannedItemCnt from "../../components/Scanned/ScannedItemCnt";
import ScanName from "../../components/Scanned/ScanName";
import AcceptBtn from "../../components/Scanned/AcceptBtn";
import NutritionalFacts from "../../components/Scanned/NutritionalFacts";
import ScanItemPic from "../../components/Scanned/ScanItemPic";
import PostScanForm from "../../components/Scanned/PostScanForm";

const ScannedScreen = (props) => {
  return (
    <View style={styles.container}>
      <ScannerHeader
        leftIconButton="Go Back"
        rightIconButton="HomeScreen"
        style={styles.materialHeader1}
      />
      <PostScanForm />
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
    width: "100%"
  },
  scanItemPic: {
    height: "30%",
    width: "90%",
    marginTop: 0,
    marginLeft: 40
  },
  scanName: {
    height: 85,
    width: "95%",
    marginTop: 0,
    alignSelf: "center"
  },
  nutritionalFacts: {
    height: 258,
    width: "90%",
    marginTop: 2,
    marginLeft: "5%"
  },
  cupertinoSegmentWithThreeTabs: {
    height: 56,
    width: "100%",
    marginTop: 0
  },
  cupertinoButtonSuccess: {
    height: 44,
    width: "90%",
    borderRadius: 30,
    marginTop: 3,
    alignSelf: "center"
  }
});

export default ScannedScreen;
