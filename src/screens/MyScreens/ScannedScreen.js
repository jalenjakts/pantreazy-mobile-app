import React from "react";
import { StyleSheet, View } from "react-native";
import ScannerHeader from "../../components/Scanner/ScannerHeader";
import PostScanForm from "../../components/Scanned/PostScanForm";

const ScannedScreen = () => {
  return (
    <View style={styles.container}>
      <PostScanForm style={styles.materialHeader1} />
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
});

export default ScannedScreen;
