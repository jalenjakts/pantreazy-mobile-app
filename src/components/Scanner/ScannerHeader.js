import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const ScannerHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftIconButtonRow}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.leftIconButton}
        >
          <MaterialCommunityIconsIcon
            name="menu"
            style={styles.leftIcon}
          />
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.scanner}>
            Scanner
          </Text>
        </View>
      </View>
      <View style={styles.leftIconButtonRowFiller}></View>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
        onPress={() => navigation.navigate('Home')}
        style={styles.rightIconButton}
      >
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.rightIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,159,37,1)",
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
  leftIconButton: {
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    marginBottom: 0
  },
  textWrapper: {
    alignSelf: "flex-end",
    marginLeft: 32,
    marginBottom: 10
  },
  scanner: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 18
  },
  leftIconButtonRow: {
    flexDirection: "row",
    marginTop: 26,
    marginBottom: 0
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    padding: 11,
    alignItems: "center",
    marginTop: 23
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 30
  }
});

export default ScannerHeader;
