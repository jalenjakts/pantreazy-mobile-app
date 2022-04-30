import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


function LogBtnSignBtn(props) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login')
          }}
          style={styles.segmentTextWrapperLeft}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup')
          }}
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
    alignItems: "center"
  },
  textWrapper: {
    height: "100%",
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row"
  },
  segmentTextWrapperLeft: {
    flex: 1,
    alignItems: "center",
    padding: 6,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    justifyContent: "center"
  },
  login: {
    fontSize: 20,
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    alignSelf: "center"
  },
  segmentTextWrapperRight: {
    flex: 1,
    alignItems: "center",
    padding: 6,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: "center"
  },
  signup: {
    fontSize: 20,
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)"
  }
});

export default LogBtnSignBtn;
