import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ProductHeader from "../../components/Product/ProductHeader";
import ScannedItemCnt from "../../components/Product/ScannedItemCnt";
import ScanName from "../../components/Product/ScanName";
import ScanItemPic from "../../components/Product/ScanItemPic";
import EditBtn from "../../components/Product/EditBtn";
import DeleteBtn from "../../components/Product/DeleteBtn";

function ProductDetails(props) {
  return (
    <View style={styles.container}>
      <ProductHeader
        leftIconButton="Go Back"
        rightIconButton="HomeScreen"
        style={styles.materialHeader1}
      ></ProductHeader>
      <ScanItemPic style={styles.scanItemPic}></ScanItemPic>
      <ScanName style={styles.scanName}></ScanName>
      <ScannedItemCnt
        style={styles.cupertinoSegmentWithThreeTabs}
      ></ScannedItemCnt>
      <EditBtn
        style={styles.edit}
      ></EditBtn>
      <DeleteBtn style={styles.delete}></DeleteBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(228,243,212,1)"
  },
  materialHeader1: {
    height: 80
  },
  scanItemPic: {
    alignSelf: "center",
    height: 300,
    width: "90%",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 30
  },
  scanName: {
    alignSelf: "center",
    height: 80,
    width: "90%",
    marginTop: 1,
  },
  cupertinoSegmentWithThreeTabs: {
    alignSelf: "center",
    height: 56,
    width: "100%",
    marginTop: "10%"
  },
  
  edit: {
    alignSelf: "center",
    height: 44,
    width: "90%",
    borderRadius: 30,
    marginTop: "10%",
  },
  delete: {
    alignSelf: "center",
    height: 44,
    width: "90%",
    backgroundColor: "rgba(74,74,74,1)",
    borderRadius: 30,
    marginTop: "5%",
  }
});

export default ProductDetails;
